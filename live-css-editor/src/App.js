import React, {useState} from 'react';
import './App.scss';



function App() {
  
  const[style, setStyle] = useState("body { background-color: #FFF;}")


  const handleOnChange = (event) => {
    setStyle(event.target.value)
  }
  
  return (
    <div className="editor-page">
      <h1 id="title">LIVE CSS EDITOR</h1>

      <div className="editor-page__container">
        <div className="editor-page__edit-container">
          <p id="main-par">Do you want to learn how to style a page with CSS? Try changing the styling for these HTML tags, h1, p, ul and il!</p>
          <style  dangerouslySetInnerHTML={{__html: style}}></style>
          <textarea className="editor-page__edit-container--textarea" onChange={handleOnChange} placeholder="h1 { color: red; }"/>
        </div>
        
        <div className="editor-page__example-container">
          <h1>Example Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul>Example Unordered List
            <li>Example List Item 1</li>
            <li>Example List Item 2</li>
            <li>Example List Item 3</li>
          </ul>
        </div>
      </div>

     
     
    </div>
  );
}

export default App;
