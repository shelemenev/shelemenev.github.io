let fontsize = 0
let intervalText
let first = true

function soundClick() {
  let audio = new Audio('music/rain.mp3')
  audio.play()
  audio.loop = true
}

function start() {
  if (!first) return

  document.querySelector('.enter').style.display = 'none'
  document.querySelector('.menu').style.display = 'block'
  document.querySelector('.menudown').style.display = 'block'
  soundClick()
  intervalText = setInterval(() => animationtext(), 40)
  first = false
}

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
  document.addEventListener('click', start)
}