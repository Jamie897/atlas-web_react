import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext'; // Import the context

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('displays the copyright text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').at(0).text()).toContain('Copyright');
  });

  it('does not display the contact link when user is logged out', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(false);
  });

  it('displays the contact link when user is logged in', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(true);
  });
});
