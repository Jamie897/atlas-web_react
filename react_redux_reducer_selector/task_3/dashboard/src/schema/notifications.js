import { schema, normalize } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Create user entity
const user = new schema.Entity('users');

// Create message entity with the key 'messages' and set idAttribute to 'guid'
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Create notification entity with author and context
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Export entities and normalization function
export { user, message, notification };

export const normalizeData = (data) => normalize(data, [notification]);

// Function that accepts userId as an argument and returns all notifications for that user from the notifications.json file
export const getAllNotificationsByUser = (userId) => {
  // Normalize the notifications data
  const normalizedData = normalizeData(notificationsData.default);

  // Get notifications for the specified user
  return Object.values(normalizedData.entities.notifications)
    .filter((notification) => notification.author === userId)
    .map((notification) => notification.context);
};

