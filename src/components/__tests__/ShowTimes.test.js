import React from "react";
import { shallow, mount } from "enzyme";
import ShowTimes from "../ShowTimes.js";
import { MemoryRouter } from "react-router-dom";

describe("SelectedSeats", () => {
  it("displays no showings when empty", () => {
    const wrapper = shallow(<ShowTimes showings={[]} />);
    expect(wrapper.text()).toContain("No showings scheduled.");
    expect(wrapper.text()).not.toContain("Showtimes:");
  });

  it("displays a link for each showing", () => {
    //needs to use mount instead of shallow to test links
    const wrapper = mount(
      <MemoryRouter>
        <ShowTimes
          showings={[
            { showingID: 2, showTime: "11:00" },
            { showingID: 345, showTime: "18:00" },
            { showingID: 678, showTime: "00:00" },
          ]}
        />
      </MemoryRouter>
    );
    expect(wrapper.find("Link").length).toBe(3);
    expect(wrapper.find("Link").at(0).props().children).toContain("11:00");
    expect(wrapper.find("Link").at(0).props().to).toBe("http://pathtoserver/2");
    expect(wrapper.find("Link").at(1).props().children).toContain("18:00");
    expect(wrapper.find("Link").at(1).props().to).toBe(
      "http://pathtoserver/345"
    );
    expect(wrapper.find("Link").at(2).props().children).toContain("00:00");
    expect(wrapper.find("Link").at(2).props().to).toBe(
      "http://pathtoserver/678"
    );
  });
});
