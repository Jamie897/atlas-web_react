import React from 'react'
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', value, html }) {
  return (
    <li data-priority={type} dangerouslySetInnerHTML={html ? { __html: html } : null}>
      {!html ? value : null}
    </li>
  );
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

// NotificationItem.defaultProps = {
//   type: 'default'
// };

export default NotificationItem