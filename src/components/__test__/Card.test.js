import { render, screen } from "@testing-library/react";
import Card from "../Card";

// test('should render correctlt', () => {
//     const { debug, container } = render(<Card />);

//     screen.debug();
// })

test('Card title', () => {
    render(<Card />);
    const cardTitle = screen.getByText(/artist/i);
    // console.log(cardTitle);
    expect(cardTitle).toBeInTheDocument;
})


