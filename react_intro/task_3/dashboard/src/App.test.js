import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component tests', () => {
    let wrapper;

    // This will run before each test and create a shallow render of the App component
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    test('App renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('App renders a div with the class App-header', () => {
        expect(wrapper.find('.App-header').length).toBe(1);
    });

    test('App renders a div with the class App-body', () => {
        expect(wrapper.find('.App-body').length).toBe(1);
    });

    test('App renders a div with the class App-footer', () => {
        expect(wrapper.find('.App-footer').length).toBe(1);
    });
});