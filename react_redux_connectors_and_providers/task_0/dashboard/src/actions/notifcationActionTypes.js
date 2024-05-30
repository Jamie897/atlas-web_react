// notificationActionTypes.js

// Define the following action types:
export const MARK_AS_READ = 'MARK_AS_READ';
export const SET_TYPE_FILTER = 'SET_TYPE_FILTER';
// task 3 - FETCH_NOTIFICATIONS_SUCCESS action type, API returns a list of notifications
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';

export const NotificationTypeFilters = {
    DEFAULT: 'DEFAULT',
    URGENT: 'URGENT',
    };