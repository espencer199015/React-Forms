import React from 'react';

const Box = ({ width, height, backgroundColor, removeBox }) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor
  };

  return (
    <div style={style}>
      <button onClick={removeBox}>X</button>
    </div>
  );
};

export default Box;