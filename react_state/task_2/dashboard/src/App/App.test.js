import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<App />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('App renders without any errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Verify if CourseList is not displayed when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('Verify if CourseList is displayed when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList')).toHaveLength(1);
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it('logOut calls logOut prop and shows an alert', () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    wrapper.instance().logOut();
    expect(logOut).toHaveBeenCalled();
    expect(global.alert).toHaveBeenCalledWith('Logging you out');
  });

  // Test to verify the default state of displayDrawer is false
  it('default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });

  // Test to verify that handleDisplayDrawer sets displayDrawer to true
  it('handleDisplayDrawer sets displayDrawer to true', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toEqual(false); // ensure default state
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(true);
  });

  // Test to verify that handleHideDrawer sets displayDrawer to false
  it('handleHideDrawer sets displayDrawer to false', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer(); // Set it to true first
    expect(wrapper.state('displayDrawer')).toEqual(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });
});
