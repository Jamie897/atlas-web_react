import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Test the <Header /> component...", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders image and h1 tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("h1").exists()).toBe(true);
  });

  it("does not render logout section when user is not logged in", () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
  });

  it("renders logout section when user is logged in", () => {
    const user = { email: "test@example.com", isLoggedIn: true };
    const wrapper = shallow(<Header user={user} />);
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
  });

  it("calls logout function when logout section is clicked", () => {
    const user = { email: "test@example.com", isLoggedIn: true };
    const logoutMock = jest.fn();
    const wrapper = shallow(<Header user={user} logout={logoutMock} />);
    wrapper.find("#logoutSection").simulate("click");
    expect(logoutMock).toHaveBeenCalled();
  });
});
