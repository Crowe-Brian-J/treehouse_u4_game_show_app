/* app.js file
 * starts game as global variable because state needs to be accessed across event listeners
 * start button click:
 * -- initializes new Game
 * -- resets game board
 * -- starts game in browser
 * keyboard button click:
 * -- ensures click is on a button element
 * physical keyboard support
 * add dynamic resizing logic to mobile
 */

//global variable(s)
let game
//for keyboard inputs - virtual keyboard disables multiple attempts
const hint = document.getElementById('input-hint')

//get button ids
const startButton = document.getElementById('btn__reset')
const qwerty = document.getElementById('qwerty')

//start game with button click
startButton.addEventListener('click', () => {
  game = new Game()
  game.resetGame()
  game.startGame()
})

//onscreen keyboard click
qwerty.addEventListener('click', (e) => {
  //ensure click is on a button element
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target)
  }
})

//keyboard support
document.addEventListener('keydown', (e) => {
  //avoid caps lock and shift
  const key = e.key.toLowerCase()

  //only proceed if key is a-z
  if (key >= 'a' && key <= 'z') {
    const allKeys = document.querySelectorAll('#qwerty button')

    allKeys.forEach((button) => {
      if (button.textContent === key) {
        if (button.disabled) {
          //show repeated input hint
          hint.textContent = "You've already selected that letter."

          //add shake class to button
          button.classList.add('shake')

          //remove shake class after animation ends to allow retrigger
          button.addEventListener(
            'animationend',
            () => {
              button.classList.remove('shake')
            },
            { once: true }
          )

          //clear hint after 3 seconds (clear any previous timeout first)
          clearTimeout(hint._timeout)
          hint._timeout = setTimeout(() => {
            hint.textContent = ''
          }, 3000)
        } else {
          //valid new input, handle interaction
          hint.textContent = '' // clear any previous hint
          game.handleInteraction(button)
        }
      }
    })
  }
})

//helper function to adjust phrase size on mobile
const adjustPhraseFontSize = () => {
  const phraseContainer = document.querySelector('#phrase')
  const phraseUl = phraseContainer.querySelector('ul')
  let fontSize = parseFloat(window.getComputedStyle(phraseUl).fontSize)

  //reset to a base font size
  phraseUl.style.fontSize = 'var(--font-size-medium)'

  //reduce font size while phrase overflows horizontally
  while (phraseUl.scrollWidth > phraseContainer.clientWidth && fontSize > 8) {
    fontSize -= 1
    phraseUl.style.fontSize = fontSize + 'px'
  }
}
