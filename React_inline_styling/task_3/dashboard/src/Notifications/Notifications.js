import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import closeButton from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  menuItem: {
    fontSize: "18px", // Example font size
    fontWeight: "bold", // Example font weight
    marginBottom: "10px", // Example margin
  },
  notifications: {
    backgroundColor: "#f8d7da", // Example background color
    color: "#721c24", // Example text color
    padding: "20px",
    border: "1px solid #f5c6cb", // Example border
    borderRadius: "4px", // Example border radius
  },
  closeButton: {
    right: 45, // Example position
    border: "none",
    position: "absolute",
    background: "transparent",
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>

        {this.props.displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.closeButton)}
              aria-label="close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={closeButton} alt="close button icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem value="No new notification for now" type="no-new" />
              ) : (
                <></>
              )}
              {this.props.listNotifications.map((not) => (
                <NotificationItem
                  key={not.id}
                  type={not.type}
                  value={not.value}
                  html={not.html}
                  markAsRead={() => {
                    this.markAsRead(not.id);
                  }}
                />
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
