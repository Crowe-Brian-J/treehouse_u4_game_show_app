/* app.js file
 * starts game as global variable because state needs to be accessed across event listeners
 * start button click:
 * -- initializes new Game
 * -- resets game board
 * -- starts game in browser
 * keyboard button click:
 * -- ensures click is on a button element
 * physical keyboard support
 */

//global variable
let game

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
  const allKeys = document.querySelectorAll('#qwerty button')

  allKeys.forEach((button) => {
    //prevent loss of life on disabled key
    //see about adding hint on screen if user presses disabled key - CHECK ME LATER
    if (button.textContent === key && !button.disabled) {
      game.handleInteraction(button)
    }
  })
})
