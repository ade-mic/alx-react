import React from "react";
import { screen, render } from "@testing-library/react";
import Footer from './Footer'

describe('Footer component', () => {
    it('renders without crashing', () => {
        render(<Footer />);

       expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    })
})