import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";
import AppContext from "../App/AppContext";

describe("Test the <Header /> component...", () => {
  it("renders without crashing", () => {
    shallow(<Header shouldRender />);
  });

  it("renders image and h1 tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("h1").exists()).toBe(true);
  });

  it("does not render logout section with default context value", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
  });

  it("renders logout section with user-defined context value", () => {
    const user = { email: "test@example.com", isLoggedIn: true };
    const wrapper = shallow(
      <AppContext.Provider value={{ user }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
  });

  it("calls logOut function when logout section is clicked", () => {
    const user = { email: "test@example.com", isLoggedIn: true };
    const logOutSpy = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find("#logoutSection").simulate("click");
    expect(logOutSpy).toHaveBeenCalled();
  });
});
