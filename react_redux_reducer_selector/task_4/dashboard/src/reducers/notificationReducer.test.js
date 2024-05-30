import notificationReducer from './notificationReducer';
import * as actionTypes from '../actions/notificationActionTypes';
import { fromJS, Map } from 'immutable';
import { normalizedData } from '../schema/notifications';
import { notificationsNormalizer } from '../schema/notifications';


// Task 3
describe('notificationReducer', () => {
    test('should return the default state when no action is passed', () => {
        const newState = notificationReducer(undefined, {});
        const expectedState = fromJS({
            notifications: Map(),
            users: Map(),
            messages: Map(),
            filter: 'DEFAULT',
        });
        expect(newState).toEqual(expectedState);
    });

    test('should handle unexpected action types', () => {
        const initialState = fromJS({
            notifications: [],
            filter: 'DEFAULT',
        });
        const newState = notificationReducer(initialState, { type: 'UNEXPECTED_ACTION', data: [] });
        expect(newState).toEqual(initialState);
    });

    test('FETCH_NOTIFICATIONS_SUCCESS should return the data passed with isRead set to false', () => {
        const notifications = [
            { id: 1, type: 'urgent', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', value: 'New data available' },
        ];

        const action = { type: actionTypes.FETCH_NOTIFICATIONS_SUCCESS, data: notifications };
        const normalizedDataMock = notificationsNormalizer(notifications);
        console.log(normalizedDataMock);
        const expectedState = fromJS({
            filter: 'DEFAULT',
            notifications: normalizedDataMock.notifications,
            users: normalizedDataMock.users,
            messages: normalizedDataMock.messages,
        });
        const newState = notificationReducer(undefined, action);
        expect(newState).toEqual(expectedState);
    });

    test('MARK_AS_READ should mark the notification as read', () => {
        const initialState = fromJS({
            filter: "DEFAULT",
            notifications: normalizedData.entities.notifications || {},
            users: normalizedData.entities.users || {},
            messages: normalizedData.entities.messages || {},
        });
        const newState = notificationReducer(initialState, { type: actionTypes.MARK_AS_READ, guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2d' });

        expect(newState.getIn(['messages', '2d8e40be-1c78-4de0-afc9-fcc147afd4d2', 'isRead'])).toBe(true);
    });

    test('SET_TYPE_FILTER should change the filter without affecting notifications', () => {
        const initialState = fromJS({
            filter: "DEFAULT",
            notifications: normalizedData.entities.notifications || {},
            users: normalizedData.entities.users || {},
            messages: normalizedData.entities.messages || {},
        });
        const newState = notificationReducer(initialState, { type: actionTypes.SET_TYPE_FILTER, filter: "URGENT" });

        expect(newState.get('filter')).toBe("URGENT");
        // Ensure notifications are unchanged
        expect(newState.get('notifications')).toEqual(initialState.get('notifications'));
    });
});