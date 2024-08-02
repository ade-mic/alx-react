import React  from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
    it('renders without crashing', () => {
        render(<Header />);

        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('School dashboard');
        
    });
})