import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App component tests', () => {
    let wrapper;

    // This will run before each test and create a shallow render of the App component
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    test('App renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('App contains the Notifications component', () => {
        expect(wrapper.find(Notifications).exists()).toBe(true);
    });

    test('App contains the Header component', () => {
        expect(wrapper.find(Header).exists()).toBe(true);
    });

    test('App contains the Login component', () => {
        expect(wrapper.find(Login).exists()).toBe(true);
    });

    test('App contains the Footer component', () => {
        expect(wrapper.find(Footer).exists()).toBe(true);
    });
});