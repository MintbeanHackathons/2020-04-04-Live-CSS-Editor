let content = document.getElementById("editor");
let style = document.getElementsByTagName("style");
content.onchange = function handleChange(event){
    style[0].innerHTML = event.target.value
}
