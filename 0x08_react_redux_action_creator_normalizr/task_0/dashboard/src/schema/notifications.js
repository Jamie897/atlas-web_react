
import * as notificationsData from "../../notifications.json";

// function that accepts userId as an argument and returns all notifications for that user from the notifications.json file.
// returns list of all notifications for that user from the notifications.json file that matches the given userId

export const getAllNotificationsByUser = (userId) => {
  const notifications = notificationsData.default;


  return notifications
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context); 
};