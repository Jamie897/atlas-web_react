import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'

function Notification({ displayDrawer = true }) {
  return (
    <>
      <div className='wholeNotification'>
        <div className='menuItem'>
          <p>Your Notifications</p>
        </div>
        {displayDrawer && (
          <div className='Notifications'>
            <button
              className='close-button'
              type='button'
              onClick={() => console.log('Close button has been clicked')}
              style={{ display: 'inline', position: 'absolute', top: '1px', right: '1px', background: 'none', border: 'none' }}
              aria-label='Close'
            >
            <span style={{ fontSize: '24px' }} aria-hidden='true'>&times;</span>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type='default' value='New Course Available' />
              <NotificationItem type='urgent' value='New Resume Available' />
              <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

Notification.propTypes = {
  displayDrawer: PropTypes.bool
};

export default Notification