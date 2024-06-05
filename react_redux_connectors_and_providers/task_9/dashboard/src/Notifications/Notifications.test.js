// src/components/Notifications.test.js
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

describe("Test Notifications.js", () => {
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];

  it("clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find(".menuItem").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("clicking on the close button calls handleHideDrawer", () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    wrapper.find("button").simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it("Notification renders without crashing", () => {
    expect(shallow(<Notifications />).exists()).toBeTruthy();
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it("renders the right html", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

  it("menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".notifications")).toHaveLength(0);
  });

  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".notifications")).toHaveLength(1);
  });

  it("renders correctly if listNotifications is empty or not passed", () => {
    const wrapper1 = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    const wrapper2 = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper1.find(NotificationItem)).toHaveLength(1);
    expect(wrapper2.find(NotificationItem)).toHaveLength(1);
  });

  it("renders the correct number of NotificationItem when listNotifications is passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it("renders the correct message when listNotifications is empty", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="no-new">No new notification for now</li>');
  });

  it("calls markAsRead function when NotificationItem is clicked", () => {
    const markAsRead = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} markAsRead={markAsRead} />);
    wrapper.find(NotificationItem).first().prop("markAsRead")();
    expect(markAsRead).toHaveBeenCalledWith(1);
  });

  it("clicking on the first button calls setNotificationFilter with URGENT", () => {
    const setNotificationFilter = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} setNotificationFilter={setNotificationFilter} />);
    wrapper.find('button').at(0).simulate('click');
    expect(setNotificationFilter).toHaveBeenCalledWith('URGENT');
  });

  it("clicking on the second button calls setNotificationFilter with DEFAULT", () => {
    const setNotificationFilter = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true}
