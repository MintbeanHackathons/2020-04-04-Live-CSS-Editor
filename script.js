
// Code to read editor
var editor = document.getElementById("editor")
var editorContent = editor.innerHTML

// Edited Content
let updatedContent = onChange(editorContent, () => save(editorContent));

// Code to write editor output to style
var pageStyle = document.getElementById("page-style")
pageStyle.innerHTML = editorContent;


