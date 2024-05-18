import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe(" Test the <Header /> component...", () => {
  it("renders without crashing", () => {
    shallow(<Header shouldRender />);
  });

  it("renders image and h1 tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("h1").exists()).toBe(true);
  });
});