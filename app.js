function ref() {
  var textcontent = document.getElementById("editor").value;
  if (document.getElementById("button1").style.display === "none") {
    document.getElementById("live-viewer").srcdoc = textcontent;
  }
}
function sent() {
  var textcontent = document.getElementById("editor").value;
  document.getElementById("live-viewer").srcdoc = textcontent;
}
function edit() {
  if (document.getElementById("button1").style.display === "none") {
    document.getElementById("button1").style.display = "block";
  } else {
    document.getElementById("reem").style.display = "none";
  }
}
function back() {
  if (document.getElementById("color").style.backgroundColor === "black") {
    document.getElementById("color").style.backgroundColor = "lightgrey";
    document.getElementById("editor").style.backgroundColor = "white";
    document.getElementById("editor").style.color = "black";
    document.getElementById("form1").style.color = "black";
    document.getElementById("editor").style.border = "2px solid grey";
    document.getElementById("live-viewer").style.border = "2px solid grey";
  } else {
    document.getElementById("color").style.backgroundColor = "black";
    document.getElementById("editor").style.backgroundColor = "dimgrey";
    document.getElementById("editor").style.color = "white";
    document.getElementById("myform").style.color = "white";
    document.getElementById("editor").style.border = "2px solid white";
    document.getElementById("live-viewer").style.border = "2px solid white";
  }
}
