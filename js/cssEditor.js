function starter(){
    //My variables selecting the necessary text boxes
var htmlText = document.getElementById("htmlText");
var cssText = document.getElementById("cssText");
var browserF = document.getElementById("browserFrame");
var doc = browserF.contentWindow.document;

doc.head.innerHTML = '<style type = "text/css">'+ cssText.value + '</style';
doc.body.innerHTML = htmlText.value;
}
