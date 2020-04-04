const cssEditor = document.getElementById("css-editor");
const head = document.head;
const style = document.createElement("style");

style.type = "text/css";
head.insertAdjacentElement("beforeend", style);

const editorKeyupEvent = () => {
  editorValue = cssEditor.value;
  try {
    style.innerText = editorValue;
  } catch (error) {
    console.log("Error", error);
  }
};

cssEditor.addEventListener("keyup", editorKeyupEvent);
