import React from 'react';

function HTMLEditor(props) {
  return (
    <form>
      <p>HTML Editor</p>
      <textarea
        rows="30"
        cols="50"
        onChange={props.HTMLChange}
        defaultValue={props.HTML}
      />
    </form>
  );
}

export default HTMLEditor;
