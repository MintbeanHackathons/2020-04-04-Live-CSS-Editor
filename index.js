let cssEditor = ace.edit("cssEditor");
cssEditor.getSession().setMode("ace/mode/css");
let htmlEditor = ace.edit("htmlEditor");
htmlEditor.getSession().setMode("ace/mode/html");

function getTextValue() {
  $('#editorValue').append(() => {
    let code = htmlEditor.getValue();
    return code;
  })
  $('#cssEditorValue').append(() => {
    let cssCode = cssEditor.getValue();
    return cssCode;
  })
  $('#htmlEditor').on('change', function() {
    $('#editorValue').empty();
    $('#editorValue').append(() => {
      let code = htmlEditor.getValue();
      let cssCode = cssEditor.getValue();
      return code;
    })
  })
  $('#cssEditor').on('change', function() {
    $('#cssEditorValue').empty();
    $('#cssEditorValue').append(() => {
      let cssCode = cssEditor.getValue();
      return cssCode;
    })
  })
  
}


$(getTextValue);
