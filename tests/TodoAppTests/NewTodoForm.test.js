import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders NewTodoForm component', () => {
  const { getByLabelText, getByText } = render(<NewTodoForm />);
  const input = getByLabelText('New Todo');
  const addButton = getByText('Add Todo');
  
  expect(input).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test('updates input value on change', () => {
  const { getByLabelText } = render(<NewTodoForm />);
  const input = getByLabelText('New Todo');
  
  fireEvent.change(input, { target: { value: 'Complete task' } });
  
  expect(input.value).toBe('Complete task');
});