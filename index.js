
function defineSession(name) {
  var EditSession = require("ace/edit_session").EditSession;
  var html = new EditSession(`<!DOCTYPE html>
  <html>
  <head>
  </head>

  <body>
  </body>

  </html>`, 1);
  var css = new EditSession(["some", "css", "code here"]);
  editor.setSession(name);
}


function editorSelect(e) {
  const selected = e.target;
  if (selected.className === 'html') {
    selected.classList.add('selected');
    selected.nextElementSibling.classList.remove('selected');
    defineSession('html');
  } else if (selected.className === 'css') {
    selected.classList.add('selected');
    selected.previousElementSibling.classList.remove('selected');
    defineSession('css');
  }
}

function update() {
  var idoc = document.getElementById('iframe').contentWindow.document;

  idoc.open();
  idoc.write(editor.getValue());
  idoc.close();
}

function setupEditor() {
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(`<!DOCTYPE html>
  <html>
  <head>
  </head>

  <body>
  </body>

  </html>`, 1);

  editor.getSession().on('change', function () {
    update();
  });

  editor.focus();


  editor.setOptions({
    fontSize: "16pt",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

const tabs = document.querySelector('.tabs');
tabs.addEventListener('click', editorSelect)

setupEditor();
update();
