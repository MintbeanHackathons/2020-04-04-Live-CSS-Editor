
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
  <h1>This is the title</h1>
  <p>You can play with the style down below</p>
  <p>Lorem ipsum, or lipsum as it is sometimes known,
   is dummy text used in laying out print, graphic 
   or web designs. The passage is attributed to an 
   unknown typesetter in the 15th century who is 
   thought to have scrambled parts of Cicero's De 
   Finibus Bonorum et Malorum for use in a type 
   specimen book.</p>

  <style>
  h1 {
    color: red;
    text-align: center;
  }

  p {
    width: 90%;
    text-align: center
  }
  </style>
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
