import { scalaToCents, parseScale2 as parseScale } from './parse-scale';

describe("Parsing Scala files", () => {
  describe("parsing a valid file", () => {
    const file = `! meanquar.scl
! Comments
1/4-comma meantone scale. Pietro Aaron's temperament (1523)
 11
!
 76.04900
 193.15686
 310.26471
	5/4
6
 503.42157
 579.
 696.57843
25/16
 -1082.89214
 	2/1`;
    const parsed = parseScale(file);
    it("should extract the description", () => {
      expect(parsed.description).toBe("1/4-comma meantone scale. Pietro Aaron's temperament (1523)");
    });
    it("should extract the filename (by convention first comment line)", () => {
      expect(parsed.filename).toBe("meanquar.scl");
    });
    it("should extract the number of steps", () => {
      expect(parsed.equivSteps).toBe(11);
    });
    it("should extract the pitches.", () => {
      expect (parsed.scale).toStrictEqual([
        "76.04900",
        "193.15686",
        "310.26471",
        "5/4",
        "6",
        "503.42157",
        "579.",
        "696.57843",
        "25/16",
        "-1082.89214",
 	    "2/1"]);
    });
    it("should have no parse error messages", () => {
      expect(parsed.errors).toHaveLength(0);
    });
  });
  describe("Parsing optional note and color values", () => {
    const file = `! meanquar.scl
! Comments
1/4-comma meantone scale. Pietro Aaron's temperament (1523)
 5
!
76.04900 Eb D# #AB3456
 5/4 F# #123456
	579.47057 #deF344
 1006.84314
 	2/1 D`;
    const parsed = parseScale(file);
    it("should extract a pitch without a label or color", () => {
      expect(parsed.scale[3]).toBe("1006.84314");
      expect(parsed.labels[3]).toBe(null);
      expect(parsed.colors[3]).toBe(null);
    });
    it("should extract a pitch with only a color", () => {
      expect(parsed.scale[2]).toBe("579.47057");
      expect(parsed.labels[2]).toBe(null);
      expect(parsed.colors[2]).toBe("#def344");
    });
    it("should extract a pitch with only a label", () => {
      expect(parsed.scale[4]).toBe("2/1");
      expect(parsed.labels[4]).toBe("D");
      expect(parsed.colors[4]).toBe(null);
    });
    it("should extract a pitch with both a label and a color", () => {
      expect(parsed.scale[1]).toBe("5/4");
      expect(parsed.labels[1]).toBe("F#");
      expect(parsed.colors[1]).toBe("#123456");
    });
    it("should extract a pitch with both a color and a label containing a space", () => {
      expect(parsed.scale[0]).toBe("76.04900");
      expect(parsed.labels[0]).toBe("Eb D#");
      expect(parsed.colors[0]).toBe("#ab3456");
    });
    it("should have no parse error messages", () => {
      expect(parsed.errors).toHaveLength(0);
    });
  });
  describe("Parsing invalid files", () => {
    const file = `! meanquar.scl
1/4-comma meantone scale. Pietro Aaron's temperament (1523)
 6
Extra
!
 76.04900#AB3456
 5/4/
-5/4
 579.4.7057
 1200.0
 	2/1 D`;
    const parsed = parseScale(file);
    it("should generate an error when the number of pitches does not match.", () => {
      const msg = parsed.errors.find(i => i.line === 11);
      expect(msg).toBeDefined();
      const { line, value, error } = msg;
      expect(error).toBe("6 pitches specified, but 2 provided");
    });
    it("should generate an error when a ratio is negative.", () => {
      const msg = parsed.errors.find(i => i.line === 7);
      expect(msg).toBeDefined();
      const { line, value, error } = msg;
      expect(error).toBe("Unexpected token.");
      expect(value).toBe("-5/4");
    });
    it("should generate an error when a ratio has more than one slash.", () => {
      const msg = parsed.errors.find(i => i.line === 6);
      expect(msg).toBeDefined();
      const { line, value, error } = msg;
      expect(error).toBe("Unexpected token.");
      expect(value).toBe(" 5/4/");
    });
    it("should generate an error when a cent has more than one dot", () => {
      const msg = parsed.errors.find(i => i.line === 8);
      expect(msg).toBeDefined();
      const { line, value, error } = msg;
      expect(error).toBe("Unexpected token.");
      expect(value).toBe(" 579.4.7057");
    });
    it("should generate an error when there is no space after a pitch before extra text.", () => {
      const msg = parsed.errors.find(i => i.line === 5);
      expect(msg).toBeDefined();
      const { line, value, error } = msg;
      expect(error).toBe("Unexpected token.");
      expect(value).toBe(" 76.04900#AB3456");
    });
    it("should generate an error when there is a non-pitch value", () => {
      const msg = parsed.errors.find(i => i.line === 3);
      expect(msg).toBeDefined();
      const { line, value, error } = msg;
      expect(error).toBe("Unexpected token.");
      expect(value).toBe("Extra");
    });
  });
  describe("converting a Scala pitch string to a cent value", () => {
    describe("decimal cents", () => {
      it("should convert a decimal cents value", () => {
        expect(scalaToCents("13.44")).toBe(13.44);
      });
      it("should convert a negative decimal cents value", () => {
        expect(scalaToCents("-13.44")).toBe(-13.44);
      });
      it("should convert a number with only a trailing decimal", () => {
        expect(scalaToCents("408.")).toBe(408);
      });
    });
    describe("ratios", () => {
      it("should convert a ratio", () => {
        expect(scalaToCents("5/4")).toBe(386.3137138648348);
      });
      it("should convert an implicit ratio", () => {
        expect(scalaToCents("2")).toBe(1200);
      });
    });
  });
});
