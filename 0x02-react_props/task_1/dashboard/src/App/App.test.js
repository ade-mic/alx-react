import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('App component', () => {
  it('renders Notifications, Header, Login, and Footer components', () => {
    render(<App />);
    expect(screen.getAllByRole('img').length).toBe(2)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('School dashboard');
    expect(screen.getAllByRole('textbox').length).toBe(1);
    expect(screen.getAllByLabelText(/Email|Password/i).length).toBe(2);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });

});
