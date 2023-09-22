import React from 'react';

const Todo = ({ task, removeTodo }) => {
  return (
    <div>
      {task}
      <button onClick={removeTodo}>X</button>
    </div>
  );
};

export default Todo;