// notificationReducer.test.js
import notificationReducer from './notificationReducer';
import * as actionTypes from '../actions/notificationActionTypes';

// Task 3
describe('notificationReducer', () => {
    test('should return the default state when no action is passed', () => {
        const newState = notificationReducer(undefined, {});
        expect(newState).toEqual({ notifications: [], filter: "DEFAULT" });
    });

    test('should handle unexpected action types', () => {
        const initialState = {
            notifications: [],
            filter: 'DEFAULT',
        };
        const newState = notificationReducer(initialState, { type: 'UNEXPECTED_ACTION', data: [] });
        expect(newState).toEqual(initialState);
    });

    test('FETCH_NOTIFICATIONS_SUCCESS should return the data passed with isRead set to false', () => {
        const notifications = [
            { id: 1, type: 'urgent', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', value: 'New data available' }
        ];
        const newState = notificationReducer(undefined, { type: actionTypes.FETCH_NOTIFICATIONS_SUCCESS, data: notifications });

        expect(newState).toEqual({
            filter: 'DEFAULT',
            notifications: notifications.map(notification => ({
                ...notification,
                isRead: false
            }))
        });
    });

    test('MARK_AS_READ should mark the notification as read', () => {
        const initialState = {
            filter: "DEFAULT",
            notifications: [
                { id: 1, type: 'urgent', value: 'New course available', isRead: false },
                { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
                { id: 3, type: 'urgent', value: 'New data available', isRead: false }
            ]
        };
        const newState = notificationReducer(initialState, { type: actionTypes.MARK_AS_READ, index: 2 });

        expect(newState.notifications.find(notification => notification.id === 2).isRead).toBe(true);
        // Check that other notifications are unaffected
        expect(newState.notifications.find(notification => notification.id !== 2).isRead).toBe(false);
    });

    test('SET_TYPE_FILTER should change the filter without affecting notifications', () => {
        const initialState = {
            filter: "DEFAULT",
            notifications: [
                { id: 1, type: 'urgent', value: 'New course available', isRead: false },
                { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
                { id: 3, type: 'urgent', value: 'New data available', isRead: false }
            ]
        };
        const newState = notificationReducer(initialState, { type: actionTypes.SET_TYPE_FILTER, filter: "URGENT" });

        expect(newState.filter).toBe("URGENT");
        // Ensure notifications are unchanged
        expect(newState.notifications).toEqual(initialState.notifications);
    });
});