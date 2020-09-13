import React from "react";
import { shallow } from "enzyme";
import SeatRow from "../SeatRow.js";
import SeatIcon from "../SeatIcon.js";

describe("SeatRow", () => {
  let wrapper, callBack;

  const testRow = {
    row: 2,
    width: 10,
    reserved: [2, 4],
    booking: [3, 5],
  };

  beforeEach(() => {
    callBack = jest.fn();
    wrapper = shallow(<SeatRow {...testRow} onSelect={callBack} />);
  });

  it("displays a row of seats", () => {
    expect(wrapper.find(SeatIcon).length).toBe(10);
  });

  it("passes the correct target prop to seats in the reserved list", () => {
    expect(wrapper.find(SeatIcon).get(2).props.targetClass).toBe("reserved");
    expect(wrapper.find(SeatIcon).get(4).props.targetClass).toBe("reserved");
  });

  it("passes the correct target prop to seats in the booking list", () => {
    expect(wrapper.find(SeatIcon).get(3).props.targetClass).toBe("booking");
    expect(wrapper.find(SeatIcon).get(5).props.targetClass).toBe("booking");
  });

  it("passes 'available' as a target prop to seats that are neither booking or reserved", () => {
    expect(wrapper.find(SeatIcon).get(1).props.targetClass).toBe("available");
    expect(wrapper.find(SeatIcon).get(7).props.targetClass).toBe("available");
  });

  it("alters which seats have the 'reserved' targetClass when the reserved list changes", () => {
    wrapper.setProps({ reserved: [1, 7] });
    expect(wrapper.find(SeatIcon).get(2).props.targetClass).toBe("available");
    expect(wrapper.find(SeatIcon).get(4).props.targetClass).toBe("available");
    expect(wrapper.find(SeatIcon).get(1).props.targetClass).toBe("reserved");
    expect(wrapper.find(SeatIcon).get(7).props.targetClass).toBe("reserved");
  });

  it("alters which seats have the 'booking' targetClass when the booking list changes", () => {
    wrapper.setProps({ booking: [1, 7] });
    expect(wrapper.find(SeatIcon).get(3).props.targetClass).toBe("available");
    expect(wrapper.find(SeatIcon).get(5).props.targetClass).toBe("available");
    expect(wrapper.find(SeatIcon).get(1).props.targetClass).toBe("booking");
    expect(wrapper.find(SeatIcon).get(7).props.targetClass).toBe("booking");
  });

  it("uses the 'reserved' targetClass for seats that are in both the reserved and booking lists", () => {
    wrapper.setProps({ booking: [2] });
    expect(wrapper.find(SeatIcon).get(2).props.targetClass).toBe("reserved");
  });

  it("gives each seat a key by combining their row and column", () => {
    expect(wrapper.find(SeatIcon).at(2).key()).toEqual("2,2");
    expect(wrapper.find(SeatIcon).at(4).key()).toEqual("4,2");
  });

  it("passes each seat's row and column number to its callback function", () => {
    wrapper.find(SeatIcon).get(3).props.onSelect();
    wrapper.find(SeatIcon).get(6).props.onSelect();
    expect(callBack).toHaveBeenCalledWith([3, 2]);
    expect(callBack).toHaveBeenCalledWith([6, 2]);
  });

  it("the keys and callback functions correctly use the row number prop", () => {
    const differentRow = { ...testRow, row: 5 };
    wrapper = shallow(<SeatRow {...differentRow} onSelect={callBack} />);
    expect(wrapper.find(SeatIcon).at(2).key()).toEqual("2,5");
    expect(wrapper.find(SeatIcon).at(4).key()).toEqual("4,5");
    wrapper.find(SeatIcon).get(3).props.onSelect();
    expect(callBack).toHaveBeenCalledWith([3, 5]);
  });
});
