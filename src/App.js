import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    // Define a list of characters to choose from
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

    // Set the length of the password
    const length = 10;

    // Generate a password by selecting random characters from the list
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    // Set the new password state
    setPassword(newPassword);
  }

  return (
    <div className='container'>
      <h2>Password Generator</h2>
      <p>{password}</p>
      <button className='btn' onClick={generatePassword}>Generate Password</button>
    </div>
  );
};

export default App;
