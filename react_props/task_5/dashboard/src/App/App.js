import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer'

function App({ isLoggedIn = false }) {
  return (
    <>
      <Notification displayDrawer={true} />
      <div className='App'>
        <Header />
        
        {isLoggedIn ? (
            <CourseList />
        ) : (
            <Login />
        )}

        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;