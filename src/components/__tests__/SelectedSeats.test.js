import React from "react";
import { shallow } from "enzyme";
import SelectedSeats from "../SelectedSeats.js";

describe("SelectedSeats", () => {
  it("displays no seats when empty", () => {
    const wrapper = shallow(<SelectedSeats booking={[]} />);
    expect(wrapper.text()).toContain("Please select your seats.");
    expect(wrapper.text()).not.toContain("Selected seats:");
  });

  it("message changes when seat array is not empty", () => {
    const wrapper = shallow(
      <SelectedSeats
        booking={[
          [1, 2],
          [2, 3],
        ]}
      />
    );
    expect(wrapper.text()).not.toContain("Please select your seats.");
    expect(wrapper.text()).toContain("Selected seats:");
  });

  it("does not display price when no seats booked", () => {
    const wrapper = shallow(<SelectedSeats booking={[]} />);
    expect(wrapper.text()).not.toContain("Price:");
  });

  it("displays the price passed as a prop ", () => {
    const wrapper = shallow(<SelectedSeats booking={[[1, 2]]} price={25.5} />);
    expect(wrapper.text()).toContain("Price: £25.50");
  });

  it("displays the price with added decimals", () => {
    const wrapper = shallow(<SelectedSeats booking={[[1, 2]]} price={32} />);
    expect(wrapper.text()).toContain("Price: £32.00");
  });

  it("displays one seat correctly", () => {
    const wrapper = shallow(<SelectedSeats booking={[[0, 2]]} />);
    expect(wrapper.text()).toContain("A2.");
  });

  it("letters are mapped to the row number with A being 0", () => {
    const wrapper = shallow(<SelectedSeats booking={[[7, 10]]} />);
    expect(wrapper.text()).toContain("H10.");
  });

  it("displays multiple seats correctly", () => {
    const wrapper = shallow(
      <SelectedSeats
        booking={[
          [3, 3],
          [10, 8],
          [16, 54],
          [25, 115],
        ]}
      />
    );
    expect(wrapper.text()).toContain("D3, K8, Q54, Z115");
  });

  it("wraps around the available letters for large seat numbers: AA, BB, etc.", () => {
    const wrapper = shallow(
      <SelectedSeats
        booking={[
          [26, 22],
          [51, 8],
          [80, 21],
          [142, 11],
        ]}
      />
    );
    expect(wrapper.text()).toContain("AA22, ZZ8, CCCC21, MMMMMM11");
  });
});
