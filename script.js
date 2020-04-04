const editor = document.getElementById("editor");
const submit = document.getElementById("submit-button");
const reset = document.getElementById("reset-button");

const sheet = (() => {
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);

  return style.sheet;
})();
submit.addEventListener("click", () => {
  changeStyles();
});
reset.addEventListener("click", () => {
  for (let i = sheet.rules.length; i > 0; i--) {
    sheet.deleteRule(0);
  }
});
const changeStyles = () => {
  sheet.insertRule(editor.value, sheet.rules.length);
};
