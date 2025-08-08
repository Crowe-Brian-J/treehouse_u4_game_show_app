/* Phrase.js file
 * sets Phrase class
 * structures phrase in lowerCase to check easier
 * adds current phrase to gameboard
 * checks player's selected letter
 * shows matched letter if applicable
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

    //logic to keep words from splitting lines - ADD TO NOTES
    const words = this.phrase.split(' ')

    //
    words.forEach((word) => {
      const wordSpan = document.createElement('span')
      wordSpan.className = 'word'

      word.split('').forEach((letter) => {
        const li = document.createElement('li')
        li.className = `hide letter ${letter}`
        //possibly add toUpperCase for legibility - CHECK ME LATER
        li.textContent = letter
        wordSpan.appendChild(li)
      })

      phraseUl.appendChild(wordSpan)

      //add space back between words
      const space = document.createElement('span')
      space.className = 'space'
      phraseUl.appendChild(space)
    })
  }

  //below commented out to fix word splitting problem - REVISIT
  //Prettier doesn't like spread syntax of [...this.phrase as array here - assign to variable]
  /*     const characters = this.phrase.split('')
    //loop over characters to create html for game board
    characters.forEach((char) => {
      const li = document.createElement('li')
      //check space
      if (char === ' ') {
        li.className = 'space'
        //check for apostrophe so I can add more phrases
      } else if (char === "'") {
        li.className = 'apostrophe'
        li.textContent = "'"
      } else {
        li.className = `hide letter ${char}`
        li.textContent = char
      }
      phraseUl.appendChild(li)
    })
  } */

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
