import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Todo App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Todo App/i);
  expect(linkElement).toBeInTheDocument();
});