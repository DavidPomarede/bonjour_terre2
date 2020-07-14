import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import {Greet} from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
