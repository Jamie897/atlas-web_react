import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    margin: '20px auto', // Example margin
    textAlign: 'center',
  },
  input: {
    margin: '10px 0', // Example margin
  },
  button: {
    marginTop: '10px', // Example margin
  },
});

function Login() {
  return (
    <main role='main' className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email</label>
      <input className={css(styles.input)} type='email' name='email' id='email' />
      <label htmlFor='password'>Password</label>
      <input className={css(styles.input)} type='password' name='password' id='password' />
      <button className={css(styles.button)} type='button'>OK</button>
    </main>
  );
}

export default Login;
