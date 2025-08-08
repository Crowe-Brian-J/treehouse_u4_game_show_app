/* Game.js file
 * sets Game class
 * stores phrases
 * chooses active phrase
 * starts game
 * button click handler helper function
 * removes a life on incorrect guess
 * checks for win after letter chosen
 * sets game over message based on win or loss
 * resets game board for next game:
 * --clears phrase
 * --resets keys
 * --full hearts
 * (Couldn't work in a Friday Night Lights reference there. I tried.)
 */

class Game {
  constructor() {
    //track number of incorrect guesses
    this.missed = 0

    //array of phrase objects to use in the game
    //use separate method to make constructor more readable/scalable
    this.phrases = this.createPhrases()

    //active phrase for the current game
    this.activePhrase = null
  }

  //create and return an array of Phrase objects
  //---POSSIBLY ADD MORE---CHECK ME LATER
  createPhrases = () => {
    const phrases = [
      'JavaScript is fun',
      'Treehouse rocks',
      'Fullstack Developer',
      'Code and Energy Drinks',
      'Object oriented programming'
    ]
    return phrases.map((phrase) => new Phrase(phrase))
  }

  //randomly select a phrase from this.phrases
  getRandomPhrase = () => {
    const index = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[index]
  }

  //start game
  startGame = () => {
    const overlay = document.getElementById('overlay')
    //hide start screen
    overlay.style.display = 'none'

    //select and display a random phrase
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }

  //handle onscreen keyboard interaction
  handleInteraction = (button) => {
    const letter = button.textContent
    //disable button after click
    button.disabled = true

    if (!this.activePhrase.checkLetter(letter)) {
      button.classList.add('wrong')
      this.removeLife()
    } else {
      button.classList.add('chosen')
      this.activePhrase.showMatchedLetter(letter)

      if (this.checkForWin()) {
        this.gameOver(true)
      }
    }
  }

  //remove life and update UI
  removeLife = () => {
    const hearts = document.querySelectorAll('.tries img')
    //check index of hearts at this.missed
    if (hearts[this.missed]) {
      hearts[this.missed].src = 'images/lostHeart.png'
    }
    //add to this.missed for next index
    this.missed++

    if (this.missed === 5) {
      //eyes going, logic going --- CHECK ME LATER
      this.gameOver(false)
    }
  }

  //check if all letters revealed
  checkForWin = () => {
    const hiddenLetters = document.querySelectorAll('#phrase li.hide')
    //boolean
    return hiddenLetters.length === 0
  }

  //end game and display overlay with results
  gameOver = (won) => {
    const overlay = document.getElementById('overlay')
    const message = document.getElementById('game-over-message')

    if (won) {
      overlay.className = 'win'
      message.textContent = 'Great job! You won!'
    } else {
      overlay.className = 'lose'
      message.textContent = 'Sorry, better luck next time!'
    }

    overlay.style.display = 'flex'
  }

  resetGame = () => {
    //get unordered list
    const ul = document.querySelector('#phrase ul')
    //clear phrase
    ul.innerHTML = ''

    //reset keyboard buttons
    const keys = document.querySelectorAll('#qwerty button')
    keys.forEach((key) => {
      key.disabled = false
      key.className = 'key'
    })

    //reset heart images
    const hearts = document.querySelectorAll('.tries img')
    hearts.forEach((heart) => {
      heart.src = 'images/liveHeart.png'
    })
  }
}
