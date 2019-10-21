import { h } from 'preact';
import { shallow } from 'enzyme';
import { act } from 'preact/test-utils';

import Colors from './colors';

describe("The color configuration", () => {
  describe("selecting spectrum colors", () => {
    it("should show the color selection", () => {
      const settings = {spectrum_colors: true, fundamental_color: "#abcdef"};
      const c = shallow(<Colors settings={settings}/>);
      expect(c.exists('input[name="fundamental_color"]')).toBe(true);
    });
  });
  describe("not selecting spectrum colors", () => {
    it("should not show the color selection", () => {
      const settings = {spectrum_colors: false, fundamental_color: "#abcdef"};
      const c = shallow(<Colors settings={settings}/>);
      expect(c.exists('input[name="fundamental_color"]')).toBe(false);
    });
  });
});
