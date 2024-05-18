import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  defaultItem: {
    color: "#333", // Example default color
  },
  urgentItem: {
    color: "red", // Example urgent color
    fontWeight: "bold", // Example font weight for urgent items
  },
});

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    // Determine the appropriate style based on the type
    const itemStyle =
      type === "urgent" ? css(styles.urgentItem) : css(styles.defaultItem);

    // Render the notification item with appropriate styling
    return html ? (
      <li
        className={itemStyle}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      ></li>
    ) : (
      <li
        className={itemStyle}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
      >
        {value}
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
  id: PropTypes.number,
};

export default NotificationItem;
