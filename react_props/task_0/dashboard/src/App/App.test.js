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

