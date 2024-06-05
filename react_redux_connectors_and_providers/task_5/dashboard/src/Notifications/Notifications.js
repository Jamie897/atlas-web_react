import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import closeButton from "../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  notifications: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: 9999,
    padding: 0,
    fontSize: "20px",
    overflowY: "auto",
  },
  menuItem: {
    cursor: "pointer",
    backgroundColor: "#fff8f8",
    float: "right",
    padding: "10px",
    borderBottom: "1px solid black",
  },
});

class Notifications extends React.PureComponent {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer, listNotifications } = this.props;
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
              {listNotifications.length === 0 ? (
                <NotificationItem value="No new notification for now" type="no-new" />
              ) : (
                listNotifications.map((not) => (
                  <NotificationItem
                    key={not.id}
                    type={not.type}
                    value={not.value}
                    html={not.html}
                    markAsRead={() => {
                      this.props.markAsRead(not.id);
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
  fetchNotifications: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string
      }),
    })
  ),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  fetchNotifications: PropTypes.func,
  markAsRead: PropTypes.func,
};

export default Notifications;
