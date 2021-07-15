import React from "react";
import { shallow } from "enzyme";
import Display from '../Display';

describe("Display", () => {
    let wrapper;
    it("wraps content in a div with .bg-display class", () => {
        wrapper = shallow(<Display />);
        expect(wrapper.find(".bg-display").length).toEqual(1);
    });
});
  