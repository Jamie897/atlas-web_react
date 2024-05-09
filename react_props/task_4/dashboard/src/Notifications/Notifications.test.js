import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component tests', () => {
    test('NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });

    test('NotificationItem renders the correct html with data props', () => {
        const type = 'default';
        const value = 'test';
        const wrapper = shallow(<NotificationItem type={type} value={value} />);

        const liItem = wrapper.find('li');

        expect(liItem.exists()).toBe(true);
        expect(liItem.prop('data-priority')).toBe(type);
        expect(liItem.text()).toBe(value);
    });

    test('Renders the correct html with a dummy html prop', () => {
        const html = { __html: '<u>test</u>' };
        const wrapper = shallow(<NotificationItem html={html} />);

        const liItem = wrapper.find('li');
        expect(liItem.exists()).toBe(true);

        expect(liItem.prop('dangerouslySetInnerHTML').__html).toBe(html);
    });
});