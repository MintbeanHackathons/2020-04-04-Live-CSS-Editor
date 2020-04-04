import React from 'react';

function HTMLDisplay(props) {
  return <props.StyledDiv dangerouslySetInnerHTML={{ __html: props.HTML }} />;
}

export default HTMLDisplay;
