import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
    const initialState = Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
    });

    it('should return the initial state when no action is passed', () => {
        const newState = uiReducer(undefined, {});
        expect(newState.toJS()).toEqual(initialState.toJS());
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
        const newState = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(newState.toJS()).toEqual({
            ...initialState.toJS(),
            isNotificationDrawerVisible: true
        });
    });

    it('should handle HIDE_NOTIFICATION_DRAWER action', () => {
        const newState = uiReducer(undefined, { type: HIDE_NOTIFICATION_DRAWER });
        expect(newState.toJS()).toEqual({
            ...initialState.toJS(),
            isNotificationDrawerVisible: false
        });
    });

    it('should handle LOGIN_SUCCESS action by setting isUserLoggedIn to true and updating user data', () => {
        const user = { email: 'test@example.com' };
        const newState = uiReducer(initialState, { type: LOGIN_SUCCESS, user });
        expect(newState.toJS()).toEqual({
            ...initialState.toJS(),
            isUserLoggedIn: true,
            user
        });
    });

    it('should handle LOGIN_FAILURE action by setting isUserLoggedIn to false', () => {
        // Starting with a state where the user is logged in for testing failure
        const loggedInState = initialState.set('isUserLoggedIn', true).set('user', { email: 'test@example.com' });
        const newState = uiReducer(loggedInState, { type: LOGIN_FAILURE });
        expect(newState.toJS()).toEqual({
            ...initialState.toJS(),
            isUserLoggedIn: false,
            user: {}
        });
    });

    it('should handle LOGOUT action by resetting user and setting isUserLoggedIn to false', () => {
        // Starting with a state where the user is logged in
        const loggedInState = initialState.set('isUserLoggedIn', true).set('user', { email: 'test@example.com' });
        const newState = uiReducer(loggedInState, { type: LOGOUT });
        expect(newState.toJS()).toEqual({
            ...initialState.toJS(),
            isUserLoggedIn: false,
            user: {}
        });
    });
});
