/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js
 */

class Phrase {
  constructor(phrase) {
    //phrase is actual phrase... converted to all lower case
    this.phrase = phrase.toLowerCase()
  }

  //display phrase on game board - adds letter placeholders to display when game starts
  //each letter presented as empty box
  // -one li element for each letter or space
  addPhraseToDisplay = () => {
    //get phrase div's ul
    const phraseUl = document.querySelector('#phrase ul')
    //clear any existing phrase
    phraseUl.innerHTML = ''

    //Prettier doesn't like spread syntax of [...this.phrase as array here - assign to variable]
    const characters = this.phrase.split('')
    //loop over characters to create html for game board
    characters.forEach((char) => {
      const li = document.createElement('li')
      //check space
      if (char === ' ') {
        li.className = 'space'
        //---check if I need to add space for textContent when I get to populated phrases---CHECK ME LATER
        //otherwise letter
      } else {
        li.className = `hide letter ${char}`
        li.textContent = char
      }
      phraseUl.appendChild(li)
    })
  }

  //returns true if player's selected letter exists in phrase
  checkLetter = (letter) => this.phrase.includes(letter)

  //showMatchedLetter method
  //reveal letter(s) on screen that match the player's selection
  //remove the 'hide' class and add 'show' class to matching letters
  showMatchedLetter = (letter) => {
    const matchedLetters = document.querySelectorAll(`.letter.${letter}`)
    matchedLetters.forEach((el) => {
      el.classList.remove('hide')
      el.classList.add('show')
    })
  }
}
