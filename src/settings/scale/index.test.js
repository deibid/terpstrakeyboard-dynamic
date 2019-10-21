import { h } from 'preact';
import { shallow } from 'enzyme';
import { act } from 'preact/test-utils';

import Scale from './index';
import ScaleTable from './scale-table';
import ScalaImport from './scala-import';

describe("The Scale settings", () => {
  describe("by default", () => {
    it("should render the scale table", () => {
      const c = shallow(<Scale settings={{}} onImport={()=>{}} />);
      expect(c.exists(ScaleTable)).toBe(true);
      expect(c.exists(ScalaImport)).toBe(false);
    });
  });
  describe("after clicking import", () => {
    it("should render the scale import", () => {
      const c = shallow(<Scale settings={{}} onImport={()=>{}} />);
      c.find("button").simulate('click');
      expect(c.exists(ScaleTable)).toBe(false);
      expect(c.exists(ScalaImport)).toBe(true);
    });
    describe("submitting the import", () => {
      it("should invoke the import and return to the scale table", () => {
        const mockImport = jest.fn();
        const c = shallow(<Scale settings={{}} onImport={mockImport} />);
        c.find("button").simulate('click');
        const exec = c.find(ScalaImport).prop('onImport');
        act(() => exec());
        expect(c.exists(ScaleTable)).toBe(true);
        expect(c.exists(ScalaImport)).toBe(false);
        expect(mockImport).toHaveBeenCalledTimes(1);
      });
    });
    describe("cancelling the import", () => {
      it("should invoke the import and return to the scale table", () => {
        const mockImport = jest.fn();
        const c = shallow(<Scale settings={{}} onImport={mockImport} />);
        c.find("button").simulate('click');
        const cancel = c.find(ScalaImport).prop('onCancel');
        act(() => cancel());
        expect(c.exists(ScaleTable)).toBe(true);
        expect(c.exists(ScalaImport)).toBe(false);
        expect(mockImport).toHaveBeenCalledTimes(0);
      });
    });
  });
});
