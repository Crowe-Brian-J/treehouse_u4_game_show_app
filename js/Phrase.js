/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 

  * Create the Phrase Class
  * - include a constructor that receives a phrase parameter and initializes the following properties:
  * -- addPhraseToDisplay()
  * -- checkLetter()
  * -- showMatchedLetter()
*/

class Phrase {
  constructor(phrase) {
    //phrase is actual phrase... converted to all lower case
    this.phrase = phrase.toLowerCase()
  }

  //display phrase on game board - adds letter placeholders to display when game starts
  //each letter presented as empty box
  // -one li element for each letter
  // -one li element for each space
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
        //otherwise letter
      } else {
        li.className = `hide letter ${char}`
        li.textContent = char
      }
      phraseUl.appendChild(li)
    })
  }
}
