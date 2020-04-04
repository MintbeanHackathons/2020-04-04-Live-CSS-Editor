import React from 'react';

function HTMLEditor(props) {
  return (
    <form>
      <h4>HTML Editor</h4>
      <textarea
        rows="30"
        cols="100"
        onChange={props.HTMLChange}
        defaultValue={props.HTML}
      />
    </form>
  );
}

export default HTMLEditor;
