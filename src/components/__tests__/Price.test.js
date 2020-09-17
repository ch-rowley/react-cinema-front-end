import React from "react";
import { shallow } from "enzyme";
import Price from "../Price.js";

describe("Price", () => {
  it("has a default value of 0", () => {
    const wrapper = shallow(<Price />);
    expect(wrapper.text()).toContain("£0.00");
  });

  it("displays a value of 0", () => {
    const wrapper = shallow(<Price>{0}</Price>);
    expect(wrapper.text()).toContain("£0.00");
  });

  it("Adds decimal places and a pound sign", () => {
    const wrapper = shallow(<Price>{5}</Price>);
    expect(wrapper.text()).toContain("£5.00");
  });

  it("works with larger numbers", () => {
    const wrapper = shallow(<Price>{1234}</Price>);
    expect(wrapper.text()).toContain("£1234.00");
  });

  it("shows decimals as pennies", () => {
    const wrapper = shallow(<Price>{0.12}</Price>);
    expect(wrapper.text()).toContain("£0.12");
  });

  it("rounds down decimals smaller than a penny", () => {
    const wrapper = shallow(<Price>{123.123}</Price>);
    expect(wrapper.text()).toContain("£123.12");
  });

  it("rounds up decimals smaller than a penny", () => {
    const wrapper = shallow(<Price>{456.456}</Price>);
    expect(wrapper.text()).toContain("£456.46");
  });
});
