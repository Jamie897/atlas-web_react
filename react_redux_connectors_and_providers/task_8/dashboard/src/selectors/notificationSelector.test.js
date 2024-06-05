import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotificationsByType } from './notificationSelector';

describe('notification selectors', () => {
    const state = Map({
        filter: 'DEFAULT',
        notifications: Map({
            1: { id: 1, type: 'default', isRead: false },
            2: { id: 2, type: 'urgent', isRead: true },
            3: { id: 3, type: 'urgent', isRead: false }
        })
    });

    it('should return the filter type', () => {
        const filter = filterTypeSelected(state);
        expect(filter).toEqual('DEFAULT');
    });

    it('should return all notifications', () => {
        const notifications = getNotifications(state);
        expect(notifications.toJS()).toEqual({
            1: { id: 1, type: 'default', isRead: false },
            2: { id: 2, type: 'urgent', isRead: true },
            3: { id: 3, type: 'urgent', isRead: false }
        });
    });

    it('should return unread notifications when filter is DEFAULT', () => {
        const unreadNotifications = getUnreadNotificationsByType(state);
        expect(unreadNotifications.toJS()).toEqual([
            { id: 1, type: 'default', isRead: false },
            { id: 3, type: 'urgent', isRead: false }
        ]);
    });

    it('should return unread urgent notifications when filter is URGENT', () => {
        const stateWithUrgentFilter = state.set('filter', 'URGENT');
        const unreadUrgentNotifications = getUnreadNotificationsByType(stateWithUrgentFilter);
        expect(unreadUrgentNotifications.toJS()).toEqual([
            { id: 3, type: 'urgent', isRead: false }
        ]);
    });
});
