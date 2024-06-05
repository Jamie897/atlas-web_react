import { bindActionCreators } from 'redux';
import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

// Action creator for marking a notification as read
export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index,  // payload that specifies the index of the notification to mark as read
  };
}

// Action creator for setting the notification filter
export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,  // payload that specifies the filter type (either 'DEFAULT' or 'URGENT')
  };
}

// Action creator for setting loading state
export function setLoadingState(isLoading) {
  return {
    type: SET_LOADING_STATE,
    isLoading,  // payload that specifies whether loading state is true or false
  };
}

// Action creator for setting notifications
export function setNotifications(notifications) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications,  // payload that contains the fetched notifications
  };
}

// Action creator for fetching notifications
export function fetchNotifications() {
  return dispatch => {
    dispatch(setLoadingState(true)); // Dispatch setLoadingState with true when starting to fetch
    fetch('/notifications.json')
      .then(response => response.json())
      .then(data => {
        dispatch(setNotifications(data)); // Dispatch setNotifications with the fetched data
        dispatch(setLoadingState(false)); // Dispatch setLoadingState with false when fetch is completed
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
        dispatch(setLoadingState(false)); // Dispatch setLoadingState with false if there's an error
      });
  };
}

// Function to bind all action creators to dispatch
export const bindNotificationActions = dispatch => bindActionCreators({
  markAsRead,
  setNotificationFilter,
  setLoadingState,
  setNotifications,
  fetchNotifications
}, dispatch);
