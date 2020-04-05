import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-github";

function App() {

  const [newStyle, setNewStyle] = useState('');

  const onChange = (newValue) => {
    setNewStyle(newValue);

    document.getElementById('style-it').innerHTML = newStyle;
  }

  //sadly it doesn't work and I can't figure out why :(

  return (
    <div className="App">
      <style id='style-it'/>
      <p>{newStyle}</p>
      <AceEditor
        mode='css'
        theme='github'
        onChange={onChange}
        className='editor'
        height='200px'
        width='250px'
        value={newStyle}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
