import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('renders a todo component', () => {
  const { getByText } = render(<Todo task="Complete task" />);
  const todoTask = getByText(/Complete task/i);
  expect(todoTask).toBeInTheDocument();
});