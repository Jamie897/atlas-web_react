import { createSelector } from 'reselect';

// Selector to get the filter type
export const filterTypeSelected = (state) => state.get('filter');

// Selector to get all notifications
export const getNotifications = (state) => state.get('notifications');

// Memoized selector to get unread notifications by type
export const getUnreadNotificationsByType = createSelector(
  [filterTypeSelected, getNotifications],
  (filter, notifications) => {
    // Filter unread notifications
    const unreadNotifications = notifications.filter(notification => !notification.isRead);

    // Return unread notifications based on filter type
    if (filter === 'urgent') {
      return unreadNotifications.filter(notification => notification.type === 'urgent');
    }

    // Default filter returns all unread notifications
    return unreadNotifications;
  }
);
