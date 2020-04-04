//initializing ace editor
let htmleditor = ace.edit("htmleditor");
htmleditor.setTheme("ace/theme/twilight");
htmleditor.session.setMode("ace/mode/html");
htmleditor.getSession().on("change", function () {
  updateIframe();
});

let csseditor = ace.edit("csseditor");
csseditor.setTheme("ace/theme/twilight");
csseditor.session.setMode("ace/mode/css");
csseditor.getSession().on("change", function () {
  updateIframeCSS();
});

function updateIframe() {
  var html = htmleditor.getValue();
  document.getElementById("return").srcdoc = html;
}

function updateIframeCSS() {
  let head = $("#return").contents().find("head");
  let css = `'<style>` + csseditor.getValue() + `</style>'`;

  $(head).append(css);
}
