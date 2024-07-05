import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the first NotificationItem element with the correct html', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).at(0).prop('value')).toBe('New course available');
  });
});
