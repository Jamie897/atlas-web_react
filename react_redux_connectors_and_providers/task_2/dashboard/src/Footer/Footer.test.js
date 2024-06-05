import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer'; // Import the unconnected Footer for testing

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer user={{ isLoggedIn: false }} />);
  });

  it('displays the copyright text', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.find('p').at(0).text()).toContain('Copyright');
  });

  it('does not display the contact link when user is logged out', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(false);
  });

  it('displays the contact link when user is logged in', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: true }} />);
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(true);
  });
});
