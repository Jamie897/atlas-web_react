import notificationReducer from './notificationReducer';
import * as actionTypes from '../actions/notificationActionTypes';
import { fromJS, Map } from 'immutable';
import { normalizedData } from '../schema/notifications';
import { notificationsNormalizer } from '../schema/notifications';

describe('notificationReducer', () => {
    test('should return the default state when no action is passed', () => {
        const newState = notificationReducer(undefined, {});
        const expectedState = fromJS({
            filter: 'DEFAULT',
            notifications: Map(),
            messages: Map(),
            users: Map(),
            loading: false,
        });
        expect(newState).toEqual(expectedState);
    });

    test('should handle unexpected action types', () => {
        const initialState = fromJS({
            filter: 'DEFAULT',
            notifications: Map(),
            messages: Map(),
            users: Map(),
            loading: false,
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
        const expectedState = fromJS({
            filter: 'DEFAULT',
            notifications: normalizedDataMock.entities.notifications,
            users: normalizedDataMock.entities.users,
            messages: normalizedDataMock.entities.messages,
            loading: false,
        });
        const newState = notificationReducer(undefined, action);
        expect(newState).toEqual(expectedState);
    });

    test('MARK_AS_READ should mark the notification as read', () => {
        const initialState = fromJS({
            filter: 'DEFAULT',
            notifications: normalizedData.entities.notifications || {},
            users: normalizedData.entities.users || {},
            messages: normalizedData.entities.messages || {},
            loading: false,
        });
        const newState = notificationReducer(initialState, { type: actionTypes.MARK_AS_READ, guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2d' });

        expect(newState.getIn(['messages', '2d8e40be-1c78-4de0-afc9-fcc147afd4d2d', 'isRead'])).toBe(true);
    });

    test('SET_TYPE_FILTER should change the filter without affecting notifications', () => {
        const initialState = fromJS({
            filter: 'DEFAULT',
            notifications: normalizedData.entities.notifications || {},
            users: normalizedData.entities.users || {},
            messages: normalizedData.entities.messages || {},
            loading: false,
        });
        const newState = notificationReducer(initialState, { type: actionTypes.SET_TYPE_FILTER, filter: 'URGENT' });

        expect(newState.get('filter')).toBe('URGENT');
        expect(newState.get('notifications')).toEqual(initialState.get('notifications'));
    });

    test('SET_LOADING_STATE should update the loading state correctly', () => {
        const initialState = fromJS({
            filter: 'DEFAULT',
            notifications: Map(),
            users: Map(),
            messages: Map(),
            loading: false,
        });
        const newState = notificationReducer(initialState, { type: actionTypes.SET_LOADING_STATE, loading: true });

        expect(newState.get('loading')).toBe(true);
    });
});
