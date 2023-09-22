import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders NewBoxForm component', () => {
  const { getByLabelText, getByText } = render(<NewBoxForm />);
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const colorInput = getByLabelText('Background Color:');
  const addButton = getByText('Add Box');
  
  expect(widthInput).toBeInTheDocument();
  expect(heightInput).toBeInTheDocument();
  expect(colorInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test('updates input values on change', () => {
  const { getByLabelText } = render(<NewBoxForm />);
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const colorInput = getByLabelText('Background Color:');
  
  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(colorInput, { target: { value: 'blue' } });
  
  expect(widthInput.value).toBe('100');
  expect(heightInput.value).toBe('100');
  expect(colorInput.value).toBe('blue');
});