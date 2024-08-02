// src/Notifications.test.js
import React from 'react';
import { render, screen } from '@testing-library/react'
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    render(<Notifications />);
  });

  it('renders three list items', () => {
    const wrapper = render(<Notifications />);
    expect(wrapper.getAllByRole('NotificationItem')).toBe(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = render(<Notifications />);
    expect(wrapper.findBy('p').text()).toBe('Here is the list of notifications');
  });
});
