const editor = document.getElementById('light');
const body = document.getElementById('body');
const theme = document.getElementById('select');

const newStyles = () => {
  const newStyleValues = editor.value;
  const newStyleSheet = document.createElement('style');
  newStyleSheet.innerHTML = newStyleValues;
  body.appendChild(newStyleSheet);
};
const newTheme = () => {
  editor.id = theme.value;
};

editor.addEventListener('change', newStyles);
theme.addEventListener('change', newTheme);
