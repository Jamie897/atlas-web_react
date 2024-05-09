import React from 'react'

const NotificationItem = ({ type, value, html }) => {
  return (
    <li data-priority={type} dangerouslySetInnerHTML={html ? { __html: html } : null}>
      {!html ? value : null}
    </li>
  );
};

export default NotificationItem