
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Notifications from "../components/Notifications";
import { fetchNotifications, markAsRead, setNotificationFilter } from "../actions/notificationActions";
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";

const NotificationsContainer = ({ fetchNotifications, ...props }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return <Notifications {...props} />;
};

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
