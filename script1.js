var cssInput = document.querySelector('#cssInput');
cssInput.addEventListener('input', (e) => {
  styleParser(e.target.value);
})
function styleParser(text) {
  //break up into sections based on ending curlybrackets
  var splitText = text.split('}')
  for (let i = 0; i < splitText.length; i++) {
    var section = splitText[i].split('{');
    console.log('section',section)
    if (!section[1]){
      return;
    }
    var selection = document.querySelectorAll(section[0].trim())
    var selectionArray = Array.from(selection);
    selectionArray.forEach( a => {
      console.log('selection',a)
      var properties = section[1].split(';')
      for (let j = 0; j < properties.length; j++) {
        let splitProps = properties[j].split(':')
        a.style.setProperty(splitProps[0].trim(), splitProps[1])
      }
    })
  }
  //for each item in splitText array,
}