//edtior code
//get textarea + apply codemirror library 
var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
	mode: "css",
	theme: "xq-dark",
	lineNumbers: true,
	autoCloseBrackets: true
});

var editor = document.querySelector('#editor');

editor.addEventListener('change', e => {
  document.getElementById('myCss').innerHTML = cssCode;
});
