import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    margin: '20px auto', // Example margin
    textAlign: 'center',
  },
  inputWrapper: {
    marginBottom: '10px', // Margin between input elements
  },
  input: {
    width: '100%', // Full width for input elements
    boxSizing: 'border-box', // Include padding and border in width
    marginBottom: '10px', // Margin between input and label
  },
  button: {
    display: 'block', // Display button on a new line
    margin: '10px auto', // Center button horizontally and add margin
  },
  // Media query for screens under 900px width
  '@media (max-width: 900px)': {
    inputWrapper: {
      display: 'block', // Each input on a new line
    },
  },
});

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Handle login submission with formData.email and formData.password
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
    // For demonstration purposes, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // Enable submit button if both email and password are not empty
    setEnableSubmit(formData.email.trim() !== '' && formData.password.trim() !== '');
  };

  return (
    <main role='main' className={css(styles.login)}>
      <form onSubmit={handleLoginSubmit}>
        <div className={css(styles.inputWrapper)}>
          <label htmlFor='email'>Email</label>
          <input
            className={css(styles.input)}
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={css(styles.inputWrapper)}>
          <label htmlFor='password'>Password</label>
          <input
            className={css(styles.input)}
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <input
          className={css(styles.button)}
          type='submit'
          value='OK'
          disabled={!enableSubmit} // Disable button if enableSubmit is false
        />
      </form>
    </main>
  );
}

export default Login;

import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  it('Submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('Submit button is enabled after changing the input values', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');
    emailInput.simulate('change', { target: { name: 'email', value: 'test@test.com' } });
    passwordInput.simulate('change', { target: { name: 'password', value: 'password123' } });
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });
});
