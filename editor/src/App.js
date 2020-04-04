import React from "react";
import "./App.css";
import Editor from "./editor";

function App() {
  return (
    <div className="App">
      <header className="head">
        <h1 className="heading">My CSS Editor</h1>
      </header>
      <main>
        <Editor />
      </main>
      <p className="instructions">
        Type some CSS into the editor above and watch the page change.
      </p>
    </div>
  );
}

export default App;
