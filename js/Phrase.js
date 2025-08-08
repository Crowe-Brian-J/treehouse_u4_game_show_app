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
  // -one li element for each letter, apostrophe or space
  addPhraseToDisplay = () => {
    //get phrase div's ul
    const phraseUl = document.querySelector('#phrase ul')
    //clear any existing phrase
    phraseUl.innerHTML = ''

    //split into words to protect boundaries
    const words = this.phrase.split(' ')

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span')
      wordSpan.className = 'word'

      //now split word into characters
      const chars = word.split('')

      chars.forEach((char) => {
        const li = document.createElement('li')

        //check for letters or apostrophes
        if (/^[a-z]$/i.test(char)) {
          li.className = `hide letter ${char}`
          li.textContent = char
        } else {
          li.className = 'apostrophe'
          li.textContent = "'"
        }

        wordSpan.appendChild(li)
      })

      phraseUl.appendChild(wordSpan)

      //add space span after each word except the last one
      if (wordIndex < words.length - 1) {
        const spaceSpan = document.createElement('span')
        spaceSpan.className = 'space'
        spaceSpan.textContent = ' '
        phraseUl.appendChild(spaceSpan)
      }
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
