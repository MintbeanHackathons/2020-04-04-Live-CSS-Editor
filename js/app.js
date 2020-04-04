'use strict'
var delay;
var editor = CodeMirror.fromTextArea(document.getElementById(''), {
    mode: 'text/html',
    tabSize:8,
    lineNumbers:true,
    onChange: function() {
        clearTimeout(delay);
        delay = setTimeout(updatePreview, 300);
    }
});
  
function updatePreview() {
    var previewFrame = document.getElementById('');
    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
    preview.open();
    preview.write(editor.getValue());
    preview.close();
}
setTimeout(updatePreview, 300);