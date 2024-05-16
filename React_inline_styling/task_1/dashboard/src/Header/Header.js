import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007bff', // Example color
    color: '#fff',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '50px', // Example size
    height: '50px', // Example size
    marginRight: '10px',
  },
  title: {
    fontSize: '24px', // Example size
    margin: 0,
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.logo)} src={logo} alt='logo' />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
}

export default Header;
