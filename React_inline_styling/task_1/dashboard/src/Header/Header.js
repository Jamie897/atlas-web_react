import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='logo' />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;