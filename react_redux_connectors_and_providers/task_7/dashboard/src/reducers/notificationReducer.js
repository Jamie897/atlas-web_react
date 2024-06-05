import { Map, fromJS } from 'immutable';
import * as actionTypes from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  filter: 'DEFAULT',
  notifications: Map(),
  messages: Map(),
  users: Map(),
  loading: false,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      // Use the notificationsNormalizer function
      const normalizedNotifications = notificationsNormalizer(action.notifications);
      return state.mergeDeep({
        notifications: fromJS(normalizedNotifications.notifications),
        users: fromJS(normalizedNotifications.users),
        messages: fromJS(normalizedNotifications.messages),
      });
    case actionTypes.MARK_AS_READ:
      return state.setIn(['messages', action.index, 'isRead'], true);
    case actionTypes.SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case actionTypes.SET_LOADING_STATE:
      return state.set('loading', action.isLoading);
    default:
      return state;
  }
};

export default notificationReducer;
