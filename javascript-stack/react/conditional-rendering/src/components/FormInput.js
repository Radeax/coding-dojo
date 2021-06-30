import React from 'react';

const FormInput = ({ label, name, value, setValue, errorMessage }) => {
  return (
    <div>
      <div className="ui card" style={{ marginTop: '20px' }}>
        <div className="ui content">
          <div className="field">
            <label>{label}</label>
            <input
              className="right floated"
              type="text"
              name={name}
              placeholder="Search..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      {errorMessage}
    </div>
  );
};

export default FormInput;
