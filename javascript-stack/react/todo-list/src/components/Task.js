import React, { useState, useEffect } from 'react';

const Task = ({ id, label, checked, changeStatus, removeTask }) => {
  const [isChecked, toggleCheck] = useState(checked);

  return (
    <div className="field">
      <div style={{ display: 'flex' }} className="ui checkbox">
        <input
          id={`task${id}`}
          type="checkbox"
          checked={checked}
          onChange={() => {
            changeStatus(id);
            toggleCheck(!isChecked);
          }}
        />
        <label
          htmlFor={`task${id}`}
          style={
            isChecked
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          }
        >
          {label}
        </label>
        <button onClick={() => removeTask({ id })} className="ui button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
