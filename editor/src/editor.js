import React, { useState } from "react";
import AceEditor from "react-ace";

const Editor = () => {
  const [styles, setStyles] = useState("");

  const onChange = (newStyle) => {
    setStyles(newStyle);
  };
  return (
    <>
      <style>{styles}</style>
      <AceEditor mode="css" theme="github" onChange={onChange} value={styles} />
    </>
  );
};

export default Editor;
