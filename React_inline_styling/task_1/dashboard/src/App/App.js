import React from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from "../utils/utils";

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
]

const styles = StyleSheet.create({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
  },
  appBody: {
    backgroundColor: '#f5f5f5',
  },
   footer: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#888',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handlePress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePress)
  }

  handlePress(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut()
    }
  }

  render () {
    return(  
    <>
      <Notifications listNotifications={listNotifications}/>
      <div className={css(styles.body)}>
        <Header />
      </div>
      <div className={css(styles.appBody)}>
        {!this.props.isLoggedIn ? 
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login /> 
          </BodySectionWithMarginBottom> : 
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses}/>
          </BodySectionWithMarginBottom>
        }
        <BodySection title="News from the School">
          <p>New News</p>
        </BodySection>
      </div>
      <div className={css(styles.appFooter)}>
        <Footer />
      </div>
    </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
