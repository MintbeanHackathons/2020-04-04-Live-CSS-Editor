
function editorSelect(e) {
  const selected = e.target;
  if (selected.className === 'html') {
    selected.classList.add('selected');
    selected.nextElementSibling.classList.remove('selected')
  } else if (selected.className === 'css') {
    selected.classList.add('selected');
    selected.previousElementSibling.classList.remove('selected')
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
