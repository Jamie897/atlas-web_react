import * as actions from './notificationActionCreators';
import * as actionTypes from './notificationActionTypes';

// Mock fetch for fetchNotifications test
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ]),
  })
);

describe('notification action creators', () => {
  it('setLoadingState should create the correct action', () => {
    const expectedAction = {
      type: actionTypes.SET_LOADING_STATE,
      loading: true,
    };
    expect(actions.setLoadingState(true)).toEqual(expectedAction);
  });

  it('setNotifications should create the correct action', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const expectedAction = {
      type: actionTypes.SET_NOTIFICATIONS,
      notifications,
    };
    expect(actions.setNotifications(notifications)).toEqual(expectedAction);
  });

  it('fetchNotifications should create the correct actions', () => {
    const dispatch = jest.fn();
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    fetch.mockResponseOnce(JSON.stringify(notifications));

    return actions.fetchNotifications()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith(actions.setLoadingState(true));
      expect(dispatch).toHaveBeenCalledWith(actions.setNotifications(notifications));
      expect(dispatch).toHaveBeenCalledWith(actions.setLoadingState(false));
    });
  });
});

