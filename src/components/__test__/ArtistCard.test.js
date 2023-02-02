import { render, screen } from "@testing-library/react";
import ArtistCard from "../ArtistCard";
import { MemoryRouter } from "react-router-dom";

test('Button test', () => {
    render(
        <MemoryRouter>
            <ArtistCard />
        </MemoryRouter>
    );
    const buttonEl =  screen.findByRole('button' ,{ name: 'Read More' });
    console.log(buttonEl);
    expect(buttonEl).toBeInTheDocument;
})

test('Playcount title', () => {
    render(
        <MemoryRouter>
            <ArtistCard />
        </MemoryRouter>
    );
    const playCount = screen.getByText(/Playcount/i);
    expect(playCount).toBeInTheDocument;
})
