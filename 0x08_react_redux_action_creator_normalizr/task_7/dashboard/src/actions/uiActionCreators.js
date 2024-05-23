import { bindActionCreators } from 'redux';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

// Action creator for user login
export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password }
  };
}

// Action creator for user logout
export function logout() {
  return {
    type: LOGOUT
  };
}

// Action creator for displaying the notification drawer
export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
}

// Action creator for hiding the notification drawer
export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
}

// Action creator for successful login
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

// Action creator for failed login
export function loginFailure() {
  return {
    type: LOGIN_FAILURE
  };
}

// Function to bind UI action creators to dispatch
export const bindUIActions = (dispatch) => bindActionCreators({
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest  // Add the loginRequest function to the bindActionCreators
}, dispatch);

// Async action creator for login request
export function loginRequest(email, password) {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch('/login-success.json');
      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      console.error('Error occurred while logging in:', error);
      dispatch(loginFailure());
    }
  };
}
