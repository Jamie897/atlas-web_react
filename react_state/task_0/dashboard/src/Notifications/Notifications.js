import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import closeButton from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

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
  },
  menuItem: {
    cursor: "pointer",
    backgroundColor: "#fff8f8",
    float: "right",
    padding: "10px",
    borderBottom: "1px solid black",
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
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>Your notifications</div>

        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{
                right: 45,
                border: "none",
                position: "absolute",
                background: "transparent",
              }}
              aria-label="close"
              onClick={handleHideDrawer}
            >
              <img src={closeButton} alt="Close button icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem value="No new notification for now" type="no-new" />
              ) : (
                this.props.listNotifications.map((not) => (
                  <NotificationItem
                    key={not.id}
                    type={not.type}
                    value={not.value}
                    html={not.html}
                    markAsRead={() => {
                      this.markAsRead(not.id);
                    }}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

export default Notifications;
