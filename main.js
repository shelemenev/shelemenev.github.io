let fontsize = 0
let intervalText

function animationtext() {
  const text = document.querySelector('h1')
  if(!text) {
    return
  }
  if(fontsize >= 120) {
    clearInterval(intervalText)
  }

  text.style.fontSize = fontsize + 'px'
  fontsize = fontsize + 3
}

function init() {
  intervalText = setInterval(() => animationtext(), 40)
}