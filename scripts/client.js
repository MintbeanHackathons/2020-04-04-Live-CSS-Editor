$(readyNow);

// STRATEGY
// editor.getValue(); gets the value of what's in the editor
// $('#dynamic-styles').text(__CUSTOM_TEXT____) sets the value of the input in the editor


function readyNow(){
    //set up event listener on editor
    $('#editor').on('input', getValue);  
}

//get the value of the editor, then update the style tag with updateStyle
function getValue(){
    valueOfEditor=editor.getValue();
    updateStyle(valueOfEditor);    
}

//insert a value into style tag in html
function updateStyle(customText){
    $('#dynamic-styles').text(customText)
}
