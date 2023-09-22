import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Color Box Maker App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Color Box Maker App/i);
  expect(linkElement).toBeInTheDocument();
});