import React from 'react';
import './App.css';
import { useState } from 'react';



function App() {
  // const style = '* {color: red; font-size: 10px;}';
  const[style, setStyle] = useState("body { background-color: #FFF;}")

  const handleOnChange = (event) => {
    setStyle(event.target.value)
  }
  
  return (
    <div className="App">
      <h1>Live Edit CSS</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div>Hi, if you would like to change the styling on this particular page. You can do so below:</div>
      <style dangerouslySetInnerHTML={{__html: style}}></style>
      <textarea contentEditable={true} onChange={handleOnChange} placeholder="body { background: red; }"/>
    </div>
  );
}

export default App;
