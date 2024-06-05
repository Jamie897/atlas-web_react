import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NotificationItem from "./NotificationItem";
import closeButton from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";
import { fetchNotifications } from "../actions/notificationActionCreators";

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

class Notifications extends React.PureComponent {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer, listNotifications, markNotificationAsRead } = this.props;
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
            <p>Here is 
