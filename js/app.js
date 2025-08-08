/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

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
