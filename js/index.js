const DOMCreate = document.createElement.bind(document);
const DOMSelect = document.querySelector.bind(document);
const DOMSelectAll = document.querySelectorAll.bind(document);

const DEFAULT_CSS =
`h1 {
  color: red;
  font-weight: bold;
}

h2 {
  color: blue;
}

h3 {
  color: green;
}

p {
  color: navy;
  font-size: 16px;
}

button {
  background-color: lightblue;
  border: solid thin black;
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

const styleManager = new StyleManager();

const setupEditor = () => {
  const node = DOMCreate('div');
  node.id = 'editor';
  node.style = 'margin:0;padding:0;'
  DOMSelect('body').appendChild(node);

  ace.config.set('basePath', 'https://pagecdn.io/lib/ace/1.4.8')
  const editor = ace.edit(node);
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/css");
  editor.session.on('change', (delta) => {
    const css = editor.getValue();
    styleManager.apply(css);
  });

  editor.session.setValue(DEFAULT_CSS);
}

const main = () => {
  setupEditor()
}

main()
