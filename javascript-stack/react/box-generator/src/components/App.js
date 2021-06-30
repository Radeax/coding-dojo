import React, { useState } from 'react';
import ColorForm from './ColorForm';
import Box from './Box';

const App = () => {
  const [boxColors, setBoxColors] = useState([]);

  const displayBoxes = () => {
    return boxColors.map((color) => <Box color={color} />);
  };

  const addBox = (e, color) => {
    e.preventDefault();
    setBoxColors([...boxColors, color]);
  };

  return (
    <div className="ui segment">
      <ColorForm addBox={addBox} />
      <div className="ui container segment" style={{ display: 'flex' }}>
        {displayBoxes()}
      </div>
    </div>
  );
};

export default App;
