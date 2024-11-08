import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('App component', () => {
  it('renders Notifications, Header, Login, and Footer components', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('notifications')).toBeInTheDocument();
    expect(screen.getByTestId('login')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

});
