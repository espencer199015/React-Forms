import React from 'react';
import ReactDOM from 'react-dom';
import ColorBoxMakerApp from './components/ColorBoxMaker/App';
import TodoApp from './components/TodoApp/App';

// For Color Box Maker
const colorBoxMakerRoot = document.getElementById('colorBoxMakerRoot');
if (colorBoxMakerRoot) {
  ReactDOM.render(<ColorBoxMakerApp />, colorBoxMakerRoot);
}

// For Todo App
const todoAppRoot = document.getElementById('todoAppRoot');
if (todoAppRoot) {
  ReactDOM.render(<TodoApp />, todoAppRoot);
}