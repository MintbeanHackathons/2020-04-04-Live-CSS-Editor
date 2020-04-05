var cssInput = document.querySelector('#cssInput');
cssInput.addEventListener('input', (e) => {
  updateStyle(e.target.value);
})
function updateStyle(text) {
  var styleText = document.querySelector("style");
  styleText.innerHTML = text;
}