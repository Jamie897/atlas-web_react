import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component tests', () => {
    let wrapper;


    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    test('Notifications renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Notifications renders the text "Here is the list of notifications"', () => {
        expect(wrapper.text().includes('Here is the list of notifications')).toBe(true);

    test('Notifications renders NotificationItem components', () => {
        const notificationItems = wrapper.find(NotificationItem);
        expect(notificationItems.length).toBe(3);
    });

    test('Verifying the first NotificationItem renders the correct html', () => {
        const firstNotificationItem = wrapper.find(NotificationItem).first();

        expect(firstNotificationItem.shallow().text()).toBe('New Course Available');
    });


    test('Menu is being displayed when displayDrawer is false', () => {
        wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    test('div.Notifications is not being displayed when displayDrawer is false', () => {
        wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications').exists()).toBe(false);
    });

    test('Menu is being displayed when displayDrawer is true', () => {
        wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    test('div.Notifications is being displayed when displayDrawer is true', () => {
        wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications').exists()).toBe(true);
    });
});