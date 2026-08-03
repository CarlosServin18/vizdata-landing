import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header with company name', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1, name: /VizData/i });
  expect(heading).toBeInTheDocument();
});
