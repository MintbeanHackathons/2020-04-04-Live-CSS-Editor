function starter(){
    //My variables selecting the necessary text boxes
let htmlText = document.getElementById("htmlText");
let cssText = document.getElementById("cssText");
let browserF = document.getElementById("browserFrame");
let bfcw = browserF.contentWindow.document;

bfcw.head.innerHTML = '<style type = "text/css">'+ cssText.value + '</style';
bfcw.body.innerHTML = htmlText.value;
}
