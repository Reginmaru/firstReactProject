import { render, screen } from '@testing-library/react';
import App from './App';


test('renders heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/The link below will direct you to my Github Account./i);
  expect(linkElement).toBeInTheDocument();
});

