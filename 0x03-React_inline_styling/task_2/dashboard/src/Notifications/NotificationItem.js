import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
  },
  urgentItem: {
    color: 'red',
  },
});

function NotificationItem({ type, html, value }) {
  const liStyle = type === 'urgent' ? styles.urgentItem : styles.defaultItem;

  return value ? (
    <li data-notification-type={type} className={css(liStyle)}>
      {value}
    </li>
  ) : (
    <li
      data-notification-type={type}
      className={css(liStyle)}
      dangerouslySetInnerHTML={html}
    ></li>
  );
}

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;
