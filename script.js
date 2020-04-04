function findElement(text) {
    const removeChars = text.replace(/[^a-zA-Z0-9 ]/g,"")
    const trimmedStr = removeChars.replace(/\s+/g, " ").trim()
    const styleArr = trimmedStr.split(' ')
    const element = styleArr[0]
    const attr = styleArr[1]
    const value = styleArr[2]
    $(document).find(element).css({'color': value})
}

function main() {
    $(document).keypress('textarea', function() {
        const text = $('textarea').val()
        findElement(text)
    })
}

$(main)