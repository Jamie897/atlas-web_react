import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications Component", () => {
  test("renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  test("renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("li")).toHaveLength(3);
  });


  test('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains("Here is the list of notifications")).toBe(true);
  });
});