let content = document.getElementById("editor");
let style = document.getElementsByTagName("style");
content.onchange = function handleChange(event){
    console.log(style, 'style')
    console.log(event.target.value)
    style[0].innerHTML = event.target.value
}

//style.innerHTML = content; 