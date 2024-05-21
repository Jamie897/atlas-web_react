import { normalize } from 'normalizr';
import * as notificationsData from '../../notifications.json';
import { notification } from '../schema/notifications';

// Function that accepts userId as an argument and returns all notifications for that user from the notifications.json file
export const getAllNotificationsByUser = (userId) => {
  // Normalize the notifications data
  const normalizedData = normalize(notificationsData.default, [notification]);

  // Get notifications for the specified user
  const userNotifications = Object.values(normalizedData.entities.notifications)
    .filter((notification) => notification.author === userId)
    .map((notification) => notification.context);

  return userNotifications;
};
