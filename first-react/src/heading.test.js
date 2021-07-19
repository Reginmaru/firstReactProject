import { render, screen } from "@testing-library/react";
import Heading from './heading';

test('renders bigger heading', () =>{
    render(<Heading />);
    const bigHeading = screen.getByText(/Profile/i);
    expect(bigHeading).toBeInTheDocument();
  })
