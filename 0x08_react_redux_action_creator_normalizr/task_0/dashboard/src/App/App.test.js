import React from "react";
import { mount } from "enzyme";
import App from "./App";
import AppContext from "./AppContext";

describe("Test the <App /> component...", () => {
  let wrapper;
  const logOutSpy = jest.fn();
  const logInMock = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <AppContext.Provider
        value={{
          user: { email: "test@example.com", password: "password", isLoggedIn: true },
          logOut: logOutSpy,
          logIn: logInMock
        }}
      >
        <App />
      </AppContext.Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders Login component if user is not logged in", () => {
    wrapper.setProps({
      user: { email: "", password: "", isLoggedIn: false }
    });
    expect(wrapper.find("Login").exists()).toBe(true);
  });

  it("renders CourseList component if user is logged in", () => {
    expect(wrapper.find("CourseList").exists()).toBe(true);
  });

  it("calls logOut function when Ctrl + H is pressed", () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { ctrlKey: true, key: "h" }));
    expect(logOutSpy).toHaveBeenCalled();
  });

  it("updates state correctly when logIn function is called", () => {
    wrapper.find("Login").props().logIn("test@example.com", "password");
    expect(wrapper.find(App).instance().state.user.email).toBe("test@example.com");
    expect(wrapper.find(App).instance().state.user.password).toBe("password");
    expect(wrapper.find(App).instance().state.user.isLoggedIn).toBe(true);
  });

  it("updates state correctly when logOut function is called", () => {
    wrapper.instance().logOut();
    expect(wrapper.find(App).instance().state.user.email).toBe("");
    expect(wrapper.find(App).instance().state.user.password).toBe("");
    expect(wrapper.find(App).instance().state.user.isLoggedIn).toBe(false);
  });
});
