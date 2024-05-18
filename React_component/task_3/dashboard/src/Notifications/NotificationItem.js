import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  notificationItem: {
    width: "100%",
    fontSize: "20px",
    padding: "10px 8px",
    borderBottom: "1px solid black",
  },
});

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, value, html, markAsRead } = this.props;

    return (
      <li
        className={css(styles.notificationItem)}
        data-notification-type={type}
        onClick={() => markAsRead()}
      >
        {value ? value : <div dangerouslySetInnerHTML={html}></div>}
      </li>
    );
  }
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {},
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
};

export default NotificationItem;
