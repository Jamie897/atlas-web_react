import { Map, fromJS } from 'immutable';
import * as actionTypes from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';


const initialState = Map({
    filter: 'DEFAULT',
    notifications: Map(),
    messages: Map(),
    users: Map(),
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NOTIFICATIONS_SUCCESS:
            // Use the notificationsNormalizer function
            const normalizedNotifications = notificationsNormalizer(action.data);
            return state.mergeDeep({
                notifications: fromJS(normalizedNotifications.notifications),
                users: fromJS(normalizedNotifications.users),
                messages: fromJS(normalizedNotifications.messages),
            });
        // When MARK_AS_READ, use the setIn function from Immutable to update the value of the item in the state
        case actionTypes.MARK_AS_READ:
            return state.setIn(['messages', action.guid, 'isRead'], true);
        // When SET_TYPE_FILTER, use the set function from Immutable to update the value of the state
        case actionTypes.SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        default:
            return state;
    }
};

export default notificationReducer;