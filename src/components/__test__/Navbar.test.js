import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { MemoryRouter } from "react-router-dom";

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

test('Should find navbar app name', () => {
    render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    );
    const app_name = screen.getByText(/fazla music/i);
    expect(app_name).toBeInTheDocument;
})

test('Should icon change dor theme', () => {
    render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    );
    const icon = screen.getByRole(`listitem`,{
        name: "theme-icon"
    });

    screen.debug();
    // console.log(icon)
    // expect(app_name).toBeInTheDocument;
})