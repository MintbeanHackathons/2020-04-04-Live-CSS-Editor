import React, { useState } from 'react';
import Styled from 'styled-components';
import HTMLDisplay from './components/HTMLDisplay';
import EditorContainer from './components/EditorContainer';
import './App.css';

function App() {
  const [showHTML, setShowHTML] = useState(
    '<h1>This is a title</h1> \n\n<p>Here is a short paragraph about nothing. I\'ll have you know I\'m also a <a href="http://markdelmar.com" target="_blank">photographer</a> but got <b>really bored</b> with it. Try editing this <span>span tag</span> for maximum effort!</p>'
  );
  const [showCSS, setShowCSS] = useState('h1 { color: red; }');

  const StyledDiv = Styled.div`
    ${showCSS}
  `;

  const HTMLChange = (e) => {
    setShowHTML(e.target.value);
  };

  const CSSChange = (e) => {
    setShowCSS(e.target.value);
  };

  return (
    <>
      <HTMLDisplay HTML={showHTML} StyledDiv={StyledDiv} />
      <EditorContainer
        HTML={showHTML}
        CSS={showCSS}
        HTMLChange={HTMLChange}
        CSSChange={CSSChange}
      />
    </>
  );
}

export default App;
