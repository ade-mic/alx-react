import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

const bounce = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const opacityChange = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const styles = StyleSheet.create({
  notifications: {
    padding: '10px 8px',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      backgroundColor: 'white',
      zIndex: '10',
      padding: '0',
      fontSize: '20px',
    },
  },
  notificationsUl: {
    listStyleType: 'none',
    padding: '0',
  },
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityChange, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
  hideMenuItem: {
    display: 'none',
  },
});

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <div className={css(styles.notifications)}>
      {!displayDrawer && (
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
      )}
      {displayDrawer && (
        <div>
          <p>Here is the list of notifications</p>
          <ul className={css(styles.notificationsUl)}>
            {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.object),
};

export default Notifications;
