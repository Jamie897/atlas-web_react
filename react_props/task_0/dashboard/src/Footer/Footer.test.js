import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    test('Footer renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Footer renders a div with the class App-footer', () => {
      expect(wrapper.find('.App-footer').length).toBe(1);
    });

    test('Header renders an img element', () => {
      expect(wrapper.text()).toContain('Copyright');
    });
});