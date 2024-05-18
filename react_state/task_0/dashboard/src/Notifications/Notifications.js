import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import closeButton from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css, keyframes } from "aphrodite";

const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

const styles = StyleSheet.create({
  notifications: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent background
    zIndex: 9999, // Ensure it appears on top
    padding: 0, // Remove padding
    fontSize: "20px", // Set font size to 20px
    overflowY: "auto", // Allow scrolling if content overflows
    animationName: fadeIn,
    animationDuration: "0.5s",
    animationTimingFunction: "ease-in-out",
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
        <div className="menuItem">Your notifications</div>

        {this.props.displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button
              style={{
                right: 45,
                border: "none",
                position: "absolute",
                background: "transparent",
              }}
              aria-label="close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={closeButton} alt="close button icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.notifications)}>
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
