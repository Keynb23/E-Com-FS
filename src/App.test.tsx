import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
test('renders App component', () => {
  render(<App />);
  expect(screen.getByText(/e-commerce/i)).toBeInTheDocument(); // Update to match your App content
});