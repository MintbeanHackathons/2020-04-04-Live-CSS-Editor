
function setupEditor() {
    window.editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow_night_blue");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue(`<!DOCTYPE html>
    <html>
    <head>
    </head>
    <style>

    </style>

    <body>
    </body>

    </html>`,1); //1 = moves cursor to end

    editor.getSession().on('change', function() {
        update();
    });

    editor.focus();
    
    
    editor.setOptions({
        fontSize: "11pt",
        showLineNumbers: false,
        showGutter: false,
        vScrollBarAlwaysVisible:true,
        enableBasicAutocompletion: false, enableLiveAutocompletion: false
    });

    editor.setShowPrintMargin(false);
    editor.setBehavioursEnabled(false);
}

function update() {
    let idoc = document.getElementById("iframe").contentWindow.document;

    idoc.open();
    idoc.write(editor.getValue());
    idoc.close();
}

setupEditor();
update();