import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import { setNotificationFilter } from "../actions/notificationActions";

describe("Test Notifications.js", () => {
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];

  let fetchNotifications;
  let setNotificationFilterMock;

  beforeEach(() => {
    fetchNotifications = jest.fn();
    setNotificationFilterMock = jest.fn();
  });

  it("clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} fetchNotifications={fetchNotifications} />);
    wrapper.find(".menuItem").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("clicking on the close button calls handleHideDrawer", () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} fetchNotifications={fetchNotifications} />);
    wrapper.find("button").at(0).simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it("Notification renders without crashing", () => {
    expect(shallow(<Notifications fetchNotifications={fetchNotifications} />).exists()).toBeTruthy();
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} fetchNotifications={fetchNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it("renders the right html", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} fetchNotifications={fetchNotifications} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

  it("menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications fetchNotifications={fetchNotifications} />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications fetchNotifications={fetchNotifications} />);
    expect(wrapper.find(".notifications")).toHaveLength(0);
  });

  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} fetchNotifications={fetchNotifications} />);
    expect(wrapper.find(".menuItem")).toHaveLength(1);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} fetchNotifications={fetchNotifications} />);
    expect(wrapper.find(".notifications")).toHaveLength(1);
  });

  it("renders correctly if listNotifications is empty or not passed", () => {
    const wrapper1 = shallow(<Notifications displayDrawer={true} listNotifications={[]} fetchNotifications={fetchNotifications} />);
    const wrapper2 = shallow(<Notifications displayDrawer={true} fetchNotifications={fetchNotifications} />);
    expect(wrapper1.find(NotificationItem)).toHaveLength(1);
    expect(wrapper2.find(NotificationItem)).toHaveLength(1);
  });

  it("renders the correct number of NotificationItem when listNotifications is passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} fetchNotifications={fetchNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it("renders the correct message when listNotifications is empty", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} fetchNotifications={fetchNotifications} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="no-new">No new notification for now</li>');
  });

  it("calls markAsRead function when NotificationItem is clicked", () => {
    const markAsRead = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} markAsRead={markAsRead} fetchNotifications={fetchNotifications} />);
    wrapper.find(NotificationItem).first().prop("markAsRead")();
    expect(markAsRead).toHaveBeenCalledWith(1);
  });

  it("should call fetchNotifications when the component is mounted", () => {
    shallow(<Notifications fetchNotifications={fetchNotifications} />);
    expect(fetchNotifications).toHaveBeenCalled();
  });

  it("clicking on the URGENT button should call setNotificationFilter with URGENT", () => {
    const wrapper = shallow(<Notifications setNotificationFilter={setNotificationFilterMock} fetchNotifications={fetchNotifications} />);
    wrapper.find('button').at(1).simulate('click');
    expect(setNotificationFilterMock).toHaveBeenCalledWith('urgent');
  });

  it("clicking on the DEFAULT button should call setNotificationFilter with DEFAULT", () => {
    const wrapper = shallow(<Notifications setNotificationFilter={setNotificationFilterMock} fetchNotifications={fetchNotifications} />);
    wrapper.find('button').at(2).simulate('click');
    expect(setNotificationFilterMock).toHaveBeenCalledWith('default');
  });
});
