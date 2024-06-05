import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
    const state = Map({
        filter: 'DEFAULT',
        notifications: Map({
            1: { id: 1, isRead: false },
            2: { id: 2, isRead: true },
            3: { id: 3, isRead: false }
        })
    });

    it('should return the filter type', () => {
        const filter = filterTypeSelected(state);
        expect(filter).toEqual('DEFAULT');
    });

    it('should return all notifications', () => {
        const notifications = getNotifications(state);
        expect(notifications.toJS()).toEqual({
            1: { id: 1, isRead: false },
            2: { id: 2, isRead: true },
            3: { id: 3, isRead: false }
        });
    });

    it('should return unread notifications', () => {
        const unreadNotifications = getUnreadNotifications(state);
        expect(unreadNotifications.toJS()).toEqual({
            1: { id: 1, isRead: false },
            3: { id: 3, isRead: false }
        });
    });
});
