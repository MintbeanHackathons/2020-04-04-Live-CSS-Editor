function getStyle() {
  $('textarea').on('change', e => {
    const style = $(e.currentTarget).val();
    updateStyle(style);
  })
}

function updateStyle(style) {
  $('style').text(style);
}

$(getStyle);