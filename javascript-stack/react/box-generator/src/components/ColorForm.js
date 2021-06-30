import React, { useState } from 'react';

const ColorForm = ({ addBox }) => {
  const [input, setInput] = useState('');
  return (
    <div className="ui container">
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={(e) => {
            addBox(e, input);
            setInput('');
          }}
          style={{ display: 'flex' }}
        >
          <label>Color</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="Add" className="ui icon button" />
        </form>
      </div>
    </div>
  );
};

export default ColorForm;
