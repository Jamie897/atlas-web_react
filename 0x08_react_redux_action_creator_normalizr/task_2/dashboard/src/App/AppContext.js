import React from 'react';

// Define the default user object
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Define the default logOut function
const defaultLogOut = () => {
  console.log('Logged out');
};

// Create a context with the default values
const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;
