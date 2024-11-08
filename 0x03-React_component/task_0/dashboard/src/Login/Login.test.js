import React from "react";
import { screen, render  } from "@testing-library/react";
import Login from './Login'

describe('Login component', () => {
    it('renders without crashing', () => {
        render(<Login />);

        expect(screen.getAllByRole('textbox').length).toBe(1);
        expect(screen.getAllByLabelText(/Email|Password/i).length).toBe(2);
    })

})