import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import SampleMarkup from "./SampleMarkup";

import AceEditor from "react-ace";

import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-github";

const code = `.sample-markup {
  font-size: 1em;
  color: purple;
}

h1 {
  color: green;
}

`;

const sheet = document.createElement("style");
sheet.innerHTML = code;
document.body.appendChild(sheet);

function App() {
    const [style, setStyle] = useState(code);
    function onChange(newValue) {
        setStyle(newValue);
        sheet.innerHTML = newValue;
        // console.log("sheet", sheet);
    }
    return (
        <div className="app">
            <div className="editor">
                <AceEditor
                    mode="css"
                    value={style}
                    theme="github"
                    onChange={onChange}
                    name="UNIQUE_ID_OF_DIV"
                    setOptions={{ showLineNumbers: true }}
                    editorProps={{ $blockScrolling: true }}
                />
            </div>
            <div className="sample-markup">
                <SampleMarkup></SampleMarkup>
            </div>
        </div>
    );
}

export default App;
