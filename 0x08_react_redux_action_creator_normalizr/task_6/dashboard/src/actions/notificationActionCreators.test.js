import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { NotificationTypeFilters } from './notificationActionTypes';

describe('notificationActionCreators', () => {
  describe('markAsRead', () => {
    it('should create an action to mark an item as read', () => {
      const index = 1;
      const expectedAction = {
        type: MARK_AS_READ,
        index
      };
      expect(markAsRead(index)).toEqual(expectedAction);
    });
  });

  describe('setNotificationFilter', () => {
    it('should create an action to set the notification filter', () => {
      const filter = NotificationTypeFilters.DEFAULT;
      const expectedAction = {
        type: SET_TYPE_FILTER,
        filter
      };
      expect(setNotificationFilter(filter)).toEqual(expectedAction);
    });
  });
});
