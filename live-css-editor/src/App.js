import React, {useState} from 'react';
import './App.css';



function App() {
  // const style = '* {color: red; font-size: 10px;}';
  const[style, setStyle] = useState("body { background-color: #FFF;}")

  

  const editTextarea = "textarea { width: 100px; height: 100px;}"

  const handleOnChange = (event) => {
    setStyle(event.target.value)
  }
  
  return (
    <div className="App">
      <h1>LIVE CSS EDITOR</h1>
      <p>Do you want to learn how to style a page with CSS? You can do so below!</p>
      <style contentEditable={true} dangerouslySetInnerHTML={{__html: style}}></style>
      <textarea dangerouslySetInnerHTML={{__html: editTextarea}} onChange={handleOnChange} placeholder="body { background: red; }"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ul>
        <li>Example List Item 1</li>
        <li>Example List Item 2</li>
        <li>Example List Item 3</li>
      </ul>
    </div>
  );
}

export default App;
