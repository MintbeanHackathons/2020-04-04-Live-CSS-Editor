//edtior code
//get textarea + apply codemirror library 
var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
	mode: "css",
	theme: "xq-dark",
	lineNumbers: true,
	autoCloseBrackets: true
});

document.getElementById("editor").addEventListener("change", updateCss);

function updateCss(){
	document.getElementById("myCss").innerHTML = editor.value; 
}
