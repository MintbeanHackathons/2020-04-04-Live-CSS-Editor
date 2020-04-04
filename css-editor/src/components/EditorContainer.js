import React from 'react';
import HTMLEditor from './HTMLEditor';
import CSSEditor from './CSSEditor';

function EditorContainer(props) {
  return (
    <>
      <HTMLEditor HTML={props.HTML} HTMLChange={props.HTMLChange} />
      <CSSEditor CSS={props.CSS} CSSChange={props.CSSChange} />
    </>
  );
}

export default EditorContainer;
