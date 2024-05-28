import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import AppContext from '../App/AppContext'; // Import AppContext

describe("Login", () => {
  it("renders without crashing", () => {
    shallow(<Login />);
  });

  it("renders 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toBe(2);
    expect(wrapper.find("label").length).toBe(2);
  });

  it("Submit button is disabled by default", () => {
    const logIn = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider value={{ logIn }}>
        <Login />
      </AppContext.Provider>
    );
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it("Submit button is enabled after changing the input values", () => {
    const logIn = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider value={{ logIn }}>
        <Login />
      </AppContext.Provider>
    );
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');
    emailInput.simulate('change', { target: { name: 'email', value: 'test@test.com' } });
    passwordInput.simulate('change', { target: { name: 'password', value: 'password123' } });
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });
});
