import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext'; // Import the context

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
  const { logIn } = useContext(AppContext); // Get logIn function from context

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(formData.email, formData.password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const newFormData = { ...prevData, [name]: value };
      // Enable submit button if both email and password are not empty
      setEnableSubmit(newFormData.email.trim() !== '' && newFormData.password.trim() !== '');
      return newFormData;
    });
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

Login.propTypes = {
  logIn: PropTypes.func.isRequired, // Ensure logIn is passed and is a function
};

export default Login;
