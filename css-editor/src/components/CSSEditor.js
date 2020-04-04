import React from 'react';

function CSSEditor(props) {
  return (
    <form>
      <p>CSS Editor</p>
      <textarea
        rows="30"
        cols="50"
        onChange={props.CSSChange}
        defaultValue={props.CSS}
      />
    </form>
  );
}

export default CSSEditor;
