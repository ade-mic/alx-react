
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications'; 

describe('Notifications component', () => {
  it('renders NotificationItem elements', () => {
    const notifications = [
            {
              type: 'default',
              value: 'New course availabl',
              html: null,
            },
            {
              type: 'default',
              value: 'New resume available',
              html: null,
            },
            {
                type: 'urgent',
                value: '',
                html: getLatestNotification()
            }
    ];

    const { getByRole } = render(<Notifications notifications={notifications} />);
    const notificationItem = getByRole('listitem'); 
    expect(notificationItem).toBeInTheDocument();
  });

  it('renders the correct HTML for the first NotificationItem', () => {
    const notifications = [
      { type: 'default', value: 'Test 1', html: '<u>test</u>' },
      // Add more test data as needed
    ];

    const { getByText } = render(<Notifications notifications={notifications} />);
    const firstNotificationItem = getByText('Test 1');
    expect(firstNotificationItem).toContainHTML('<u>test</u>');
  });
});
