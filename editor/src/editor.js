import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = () => {
  const [styles, setStyles] = useState("");

  const onChange = (newStyle) => {
    setStyles(newStyle);
  };
  return (
    <>
      <style>{styles}</style>
      <AceEditor
        mode="css"
        theme="monokai"
        onChange={onChange}
        value={styles}
        setOptions={{
          showLineNumbers: true,
        }}
      />
    </>
  );
};

export default Editor;
