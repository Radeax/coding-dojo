import React, { useReducer } from 'react';

const initialState = {
  firstName: {
    value: '',
    error: null,
  },
  lastName: {
    value: '',
    error: null,
  },
  email: {
    value: '',
    error: null,
  },
};

const reducer = (state, action) => {
  return {
    ...state,
    [action.type]: {
      value: action.payload,
      error: action.error,
    },
  };
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: name,
      payload: value,
      error: errorMessage(name, value),
    });
  };

  const errorMessage = (name, value) => {
    switch (name) {
      case 'firstName': {
        return value.length > 0 && value.length < 2
          ? 'First Name must be at least 2 characters'
          : null;
      }
      case 'lastName': {
        return value.length > 0 && value.length < 2
          ? 'Last Name must be at least 2 characters'
          : null;
      }
      case 'email': {
        return !validateEmail(value) && value.length > 0
          ? 'You have entered an invalid email address!'
          : null;
      }
      default: {
        break;
      }
    }
  };

  // returns false if it doesn't match regex
  const validateEmail = (email) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  };

  return (
    <div className="ui container">
      <div className="ui segment form">
        <div className="field">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            value={state.firstName.value}
            onChange={handleChange}
          />
          {state.firstName.error !== null && (
            <p className="error">{state.firstName.error}</p>
          )}
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={state.lastName.value}
            onChange={handleChange}
          />
          {state.lastName.error !== null && (
            <p className="error">{state.lastName.error}</p>
          )}
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email.value}
            onChange={handleChange}
          />
          {state.email.error !== null && (
            <p className="error">{state.email.error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
