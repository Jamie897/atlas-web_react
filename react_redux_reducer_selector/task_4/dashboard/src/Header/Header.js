import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from '../App/AppContext'; // Import the context

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007bff', // Example color
    color: '#fff',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Add space between logo/title and welcome/logout
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
  logoutSection: {
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer', // Change cursor to indicate it's clickable
  },
});

class Header extends React.Component {
  static contextType = AppContext; // Define the contextType property

  render() {
    const { user, logOut } = this.context; // Get user and logOut from context
    const isLoggedIn = user.isLoggedIn; // Extract isLoggedIn from user object

    return (
      <header className={css(styles.header)}>
        <div>
          <img className={css(styles.logo)} src={logo} alt='logo' />
          <h1 className={css(styles.title)}>School dashboard</h1>
        </div>
        {isLoggedIn && ( // Conditionally render the logout section
          <section className={css(styles.logoutSection)} id='logoutSection' onClick={logOut}>
            Welcome {user.email} (logout)
          </section>
        )}
      </header>
    );
  }
}

export default Header;

Header.contextType = AppContext; // Set the contextType outside the class definition for compatibility

