import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('renders BoxList component', () => {
  const { getByText } = render(<BoxList />);
  const addButton = getByText(/Add Box/i);
  expect(addButton).toBeInTheDocument();
});

test('adds a box when form is submitted', () => {
  const { getByLabelText, getByText, getByTestId } = render(<BoxList />);
  
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const colorInput = getByLabelText('Background Color:');
  const addButton = getByText('Add Box');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(colorInput, { target: { value: 'blue' } });
  
  fireEvent.click(addButton);
  
  const box = getByTestId('box-component');
  expect(box).toBeInTheDocument();
});