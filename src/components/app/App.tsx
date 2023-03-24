import React from 'react';
import { useAppSelector } from '../../hooks';
import PasswordGenerator from '../passwordGenerator/PasswordGenerator';
import PasswordValue from '../passwordValue/PasswordValue';
import './App.css';

function App() {
  const { password, length, option } = useAppSelector(
    (state) => state.password,
  );
  return (
    <div className="App">
      <h1>Password Generator</h1>
      <PasswordValue password={password} />
      <PasswordGenerator length={length} option={option} />
    </div>
  );
}

export default App;
