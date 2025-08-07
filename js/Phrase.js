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
}
