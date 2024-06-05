import React from "react";
import { shallow } from "enzyme";
import { fromJS } from 'immutable';
import App, { mapStateToProps } from "./App";

describe('mapStateToProps function', () => {
  it('returns the right object when passing the state with isUserLoggedIn as true', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
        user: { email: "user@example.com" }
      }
    });
    const props = mapStateToProps(state);
    expect(props).toEqual({ isLoggedIn: true, user: { email: "user@example.com" }, listNotifications: [], displayDrawer: false });
  });
});

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
