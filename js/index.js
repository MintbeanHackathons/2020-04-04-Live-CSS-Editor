const DOMCreate = document.createElement.bind(document);
const DOMSelect = document.querySelector.bind(document);
const DOMSelectAll = document.querySelectorAll.bind(document);

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

DOMSelect('#refresh').onclick = (e) => {
  styleManager.apply('p{ color: red }');
}
