import React, { useState } from 'react';
import FormInput from './FormInput';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const errorMessage = (inputName) => {
    if (
      inputName === 'firstName' &&
      firstName.length > 0 &&
      firstName.length < 2
    )
      return 'First Name must be at least 2 characters';
    if (inputName === 'lastName' && lastName.length > 0 && lastName.length < 2)
      return 'Last Name must be at least 2 characters';
    if (inputName === 'email' && email.length > 0 && email.length < 5)
      return 'Email must be at least 5 characters';
    if (inputName === 'password' && password.length > 0 && password.length < 8)
      return 'Password must be at least 8 characters';
    if (
      inputName === 'confirmPassword' &&
      confirmPassword.length > 0 &&
      password !== confirmPassword
    )
      return 'Passwords must match';
  };

  const form = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="ui container">
      <div style={form}>
        <FormInput
          label="First Name"
          name="first-name"
          value={firstName}
          setValue={setFirstName}
          errorMessage={errorMessage('firstName')}
        />
        <FormInput
          label="Last Name"
          name="last-name"
          value={lastName}
          setValue={setLastName}
          errorMessage={errorMessage('lastName')}
        />
        <FormInput
          label="Email"
          name="email"
          value={email}
          setValue={setEmail}
          errorMessage={errorMessage('email')}
        />
        <FormInput
          label="Password"
          name="password"
          value={password}
          setValue={setPassword}
          errorMessage={errorMessage('password')}
        />
        <FormInput
          label="Confirm Password"
          name="confirm-Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          errorMessage={errorMessage('confirmPassword')}
        />
      </div>
    </div>
  );
};

export default App;
