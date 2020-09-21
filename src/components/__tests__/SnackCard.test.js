import React from "react";
import { shallow } from "enzyme";
import SnackCard from "../SnackCard.js";

describe("SnackCard", () => {
  let wrapper, callBack;

  const testSnack = {
    name: "popcorn",
    quantity: 2,
    price: 3.99,
    image: "a_popcorn_photo",
  };

  beforeEach(() => {
    callBack = jest.fn();
    wrapper = shallow(<SnackCard {...testSnack} callBack={callBack} />);
  });

  it("displays snack information", () => {
    expect(wrapper.text()).toContain("popcorn");
    expect(wrapper.text()).toContain("3.99");
    expect(wrapper.text()).toContain("2");
  });

  it("has an image with the correct src", () => {
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.find("img").props().src).toBe("a_popcorn_photo");
    expect(wrapper.find("img").props().alt).toBe("popcorn");
  });

  it("contains two buttons with text", () => {
    expect(wrapper.find("button").length).toBe(2);
    expect(wrapper.find("button").at(0).text()).toBe("+1");
    expect(wrapper.find("button").at(1).text()).toBe("-1");
  });

  it("changing the quantity prop changes the amount displayed", () => {
    expect(wrapper.find(".quantity").at(0).text()).toBe("2");
    wrapper.setProps({ quantity: 5 });
    expect(wrapper.find(".quantity").at(0).text()).toBe("5");
  });

  it("calls callback to increment when first button is clicked", () => {
    expect(callBack).not.toHaveBeenCalled();
    wrapper.find("button").at(0).simulate("click");
    expect(callBack).toHaveBeenCalledWith(1);
    expect(callBack).toHaveBeenCalledTimes(1);
  });

  it("calls callback to decrement when second button is clicked", () => {
    expect(callBack).not.toHaveBeenCalled();
    wrapper.find("button").at(1).simulate("click");
    expect(callBack).toHaveBeenCalledWith(-1);
    expect(callBack).toHaveBeenCalledTimes(1);
  });
});
