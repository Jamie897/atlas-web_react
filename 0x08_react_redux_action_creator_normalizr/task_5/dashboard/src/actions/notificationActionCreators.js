// Import the action types
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

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
