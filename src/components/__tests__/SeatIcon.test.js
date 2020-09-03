import React from "react";
import { shallow } from "enzyme";
import Seat from "../SeatIcon.js";

describe("Seat", () => {
  let wrapper, callBack;

  beforeEach(() => {
    callBack = jest.fn();
    wrapper = shallow(<Seat targetClass="testClass" onSelect={callBack} />);
  });

  it("displays a seat icon", () => {
    expect(wrapper.find("MdEventSeat").length).toBe(1);
  });

  it("includes a custom class", () => {
    expect(wrapper.find(".testClass").length).toBe(1);
  });

  it("changes the custom class when target prop changes", () => {
    expect(wrapper.find(".testClass").length).toBe(1);
    expect(wrapper.find(".otherClass").length).toBe(0);
    wrapper.setProps({ targetClass: "otherClass" });
    expect(wrapper.find(".testClass").length).toBe(0);
    expect(wrapper.find(".otherClass").length).toBe(1);
  });

  it("calls the callback function when chair icon is clicked", () => {
    expect(callBack).not.toHaveBeenCalled();
    wrapper.first("MdEventSeat").simulate("click");
    expect(callBack).toHaveBeenCalled();
  });
});
