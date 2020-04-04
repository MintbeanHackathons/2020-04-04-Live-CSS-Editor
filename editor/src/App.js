import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Editor from "./editor";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My CSS Editor</h1>
      </header>
      <Editor />
    </div>
  );
}

export default App;
