import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component tests', () => {
    let wrapper;

    // This will run before each test and create a shallow render of the Notifications component
    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    test('Notifications renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Notifications renders three list items', () => {
        expect(wrapper.find('li').length).toBe(3);
    });

    test('Notifications renders the text "Here is the list of notifications"', () => {
        expect(wrapper.text().includes('Here is the list of notifications')).toBe(true);
    });
});