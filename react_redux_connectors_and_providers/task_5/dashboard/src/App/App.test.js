import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { mapStateToProps } from './App'; // Import mapStateToProps function

describe("Test the <App /> component...", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders Login component if user is not logged in", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find("Login").exists()).toBe(true);
  });

  it("renders CourseList component if user is logged in", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find("CourseList").exists()).toBe(true);
  });
});

describe('mapStateToProps function', () => {
  it('maps the state to props correctly', () => {
    const state = {
      courses: {},
      notifications: {},
      ui: { isUserLoggedIn: true, user: { email: "user@example.com" } }
    };

    const props = mapStateToProps(state);

    expect(props).toEqual({
      isLoggedIn: true,
      user: { email: "user@example.com" }
    });
  });
});
