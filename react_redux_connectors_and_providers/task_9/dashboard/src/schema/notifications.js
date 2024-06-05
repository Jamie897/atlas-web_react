import * as notificationData from '../../dist/notifications.json';
import { normalize, schema } from 'normalizr';

// define the schema for the notification data
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
    idAttribute: 'guid'
});
export const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

// normalize the data according to the schema
export const normalizedData = normalize(notificationData.default, [notification]);

export function getAllNotificationsByUser(userId) {
    return Object.values(normalizedData.entities.notifications).filter((message) => message.author === userId)
    .map((message) => normalizedData.entities.messages[message.context]);
}

export function notificationsNormalizer(data) {
    const normalizedData = normalize(data, [notification]);
    return normalizedData.entities;
}
                                                                                                          