import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component tests', () => {
    let wrapper;

    // This will run before each test and create a shallow render of the App component
    beforeEach(() => {
        wrapper = shallow(<Login />);
    });

    test('Login renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Login renders a div with the class App-body', () => {
      expect(wrapper.find('.App-body').length).toBe(1);
    });

    test('Login renders two input elements', () => {
      expect(wrapper.find('input').length).toBe(2);
    });

    test('Login renders two label elements', () => {
      expect(wrapper.find('label').length).toBe(2);
    });
});