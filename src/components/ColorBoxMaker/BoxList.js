import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box, index) => index !== id));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box, index) => (
        <Box key={index} width={box.width} height={box.height} backgroundColor={box.backgroundColor} removeBox={() => removeBox(index)} />
      ))}
    </div>
  );
};

export default BoxList;