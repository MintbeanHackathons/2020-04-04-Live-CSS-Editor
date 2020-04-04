import React from 'react';

function CSSEditor(props) {
  return (
    <form>
      <h4>CSS Editor</h4>
      <textarea
        rows="30"
        cols="100"
        onChange={props.CSSChange}
        defaultValue={props.CSS}
      />
    </form>
  );
}

export default CSSEditor;
