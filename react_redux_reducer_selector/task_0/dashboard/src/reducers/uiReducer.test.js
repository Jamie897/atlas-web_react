// reducers/uiReducer.test.js

import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
    const initialState = {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
    };

    it('should return the initial state when no action is passed', () => {
        const newState = uiReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const newState = uiReducer(undefined, { type: 'SELECT_COURSE' });
        expect(newState).toEqual(initialState);
    });

    it('should change isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const newState = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(newState).toEqual({
            ...initialState,
            isNotificationDrawerVisible: true
        });
    });
});
