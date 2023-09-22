import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList component', () => {
  const { getByText } = render(<TodoList />);
  const todoListTitle = getByText(/Todo List/i);
  expect(todoListTitle).toBeInTheDocument();
});

test('adds a todo when form is submitted', () => {
  const { getByLabelText, getByText } = render(<TodoList />);
  
  const input = getByLabelText('New Todo');
  const addButton = getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'Complete task' } });
  fireEvent.click(addButton);
  
  const todo = getByText(/Complete task/i);
  expect(todo).toBeInTheDocument();
});