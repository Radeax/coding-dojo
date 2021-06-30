import React from 'react';

const coloredBox = (color) => {
  return {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    margin: '10px',
    border: '1px solid #ccc',
  };
};

const Box = ({ color }) => {
  return <div style={coloredBox(color)}></div>;
};

export default Box;
