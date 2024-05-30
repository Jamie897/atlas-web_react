// reducers/uiReducer.test.js

import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

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

    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const newState = uiReducer(undefined, { type: 'SELECT_COURSE' });
        expect(newState.toJS()).toEqual(initialState.toJS());
    });

    it('should change isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const newState = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(newState.toJS()).toEqual({
            ...initialState.toJS(),
            isNotificationDrawerVisible: true
        });
    });
});
