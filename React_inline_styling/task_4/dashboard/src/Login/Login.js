import React from 'react';
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
  return (
    <main role='main' className={css(styles.login)}>
      <div className={css(styles.inputWrapper)}>
        <label htmlFor='email'>Email</label>
        <input className={css(styles.input)} type='email' name='email' id='email' />
      </div>
      <div className={css(styles.inputWrapper)}>
        <label htmlFor='password'>Password</label>
        <input className={css(styles.input)} type='password' name='password' id='password' />
      </div>
      <button className={css(styles.button)} type='button'>OK</button>
    </main>
  );
}

export default Login;
