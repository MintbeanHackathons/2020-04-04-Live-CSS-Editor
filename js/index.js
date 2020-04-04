const DOMCreate = document.createElement.bind(document);
const DOMSelect = document.querySelector.bind(document);
const DOMSelectAll = document.querySelectorAll.bind(document);

const DEFAULT_CSS =
`h2 {
  color: red;
  font-family: fantasy;
  font-weight: normal;
}

h3 {
  color: blue;
  font-family: monospace;
}

h4 {
  color: green;
}

p {
  color: navy;
  font-size: 16px;
}

button {
  background-color: lightblue;
  border: solid thin black;
  border-radius: 10px;
  font-size:2em;
}

main {
  padding: 1em;
}`

class StyleManager {
  constructor() {
    this.styleNode = document.createElement('style');
    this.styleNode.type = 'text/css';
    DOMSelect('head').appendChild(this.styleNode);
  }

  apply(css) {
    this.styleNode.innerHTML = css;
  }
}

class App {
  constructor() {
    this.styleManager = new StyleManager();
  }

  setupEditor() {
    const node = DOMCreate('div');
    node.id = 'editor';
    node.style = 'margin:0;padding:0;'; // To force precedence
    DOMSelect('body').appendChild(node);

    ace.config.set('basePath', 'https://pagecdn.io/lib/ace/1.4.8')
    const editor = ace.edit(node);
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/css");
    editor.session.on('change', () => {
      const css = editor.getValue();
      this.styleManager.apply(css);
    });

    editor.session.setValue(DEFAULT_CSS);
  }

  run() {
    this.setupEditor()
  }
}

(new App()).run()
