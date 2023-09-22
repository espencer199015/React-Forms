import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('renders a box component', () => {
  const { container } = render(<Box width={100} height={100} backgroundColor="blue" />);
  expect(container.firstChild).toHaveStyle('width: 100px');
  expect(container.firstChild).toHaveStyle('height: 100px');
  expect(container.firstChild).toHaveStyle('background-color: blue');
});