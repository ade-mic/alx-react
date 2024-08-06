import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

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
});

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <div className={css(styles.notifications)}>
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
