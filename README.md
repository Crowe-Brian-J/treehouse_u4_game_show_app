# Game Show App - Treehouse Unit 4 Project
I am going for an exceeds expectations grade.
---
## Project Instructions
1. Create the *Phrase* Class in the *phrase.js* File
  - Class should be a constructor that receives a *phrase* parameter and initializes the following properties:
    - *phrase*: this is the actual phrase the Phrase object is representing. This property should be set to the *phrase* parameter, but converted to all lower case
  - The class should also have these methods:
    - *addPhraseToDisplay()*: this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one *li* element for each letter. See *example_phrase_html.txt* for an example of what the rendered HTML for a phrase should look like when the game starts, including any *id* or *class* attributes needed. When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the *showMatchedLetter()* method below). Make sure the phrase displayed on the screen uses the *letter* CSS class for letters and the *space* CSS class for spaces
    - *checkLetter()*: checks to see if the letter selected by the player matches a letter in the phrase.
    - *showMatchedLetter()*: revealse the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's *hide* CSS class with the *show* CSS class.
---
2. Create the *Game* Class in the *game.js* File
  - The class should include a constructor that initializes the following properties:
    - *missed*: used to track the number of missed guesses by the player. The initial value is a *0*, since no guesses have been made at the start of the game.
    - *phrases*: an array of five *Phrase* objects ot use with the game. A phrase should only include letters and spaces -- no numbers, punctuation, or other special characters.
    - *activePhrase*: This is the *Phrase* object that's currently in play. The initial value is null. Within the *startGame()* method, this property will be set to the *Phrase* object returned from a call to the *getRandomPhrase()* method.
  - The class should also have these methods:
    - *startGame()*: hides the start screen overlay, calls the *getRandomPhrase()* method, and sets the *activePhrase* property with the chose phrase. It also adds that phrase to the board by calling the *addPhraseToDisplay()* method on the *activePhrase* property.
    - *getRandomPhrase()*: this method randomly retrieves one of the phrases stored in the *phrases* array and returns it.
    - *handleInteraction()*: this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. This method should:
      - Disable the selected letter's onscreen keyboard button.
      - If the phrase does **not** include the guessed letter, add the *wrong* CSS class to the selected letter's keyboard button and call the *removeLife()* method.
      - If the phrase includes the guessed letter, add the *chosen* CSS class to the selected letter's keyboard function, call the *showMatchedLetter()* method on the phrase, and then call the *checkForWin()* method. If the player has won the game, also call the *gameOver()* method.
    - *removeLife()*: this method removes a life from the scoreboard, by replacing one of the *liveHeart.png* images with a *lostHear.png* image (found in the *images* folder) and increment the *missed* property. If the player has five missed guesses (i.e. they're out of lives), then end the game by calling the *gameOver()* method.
    - *checkForWin()*: this method checks to see if the player has revealed all of the letters in the active phrase.
    - *gameOver()*: this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay *h1* element with a friendly win or loss message, and replaces the overlay's *start* CSS class with either a *win* or *lose* CSS class.
---
3. Update the *app.js* File
  - Here we will include event listeners, enabling user interaction with the game, as well as instantiate a new instance of the Game class to initiate the game's functionality
    1. Add a *click* event listener to "Start Game" button which creates a new *Game* object and starts the game by calling the *startGame()* method.
    2. Add *click* event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the *handleInteraction()* method on the Game object. Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard buttons should not result in the *handleInteraction()* method being called.
---
4. Resetting the Gameboard between Games
  - After a game is completed, the gameboard needs to be reset so that clicking the 'Start Game' button will successfully load a new game.
  - To reset the game, complete the following steps: 
    1. Remove all *li* elements from the Phrase *ul* element
    2. Enable all of the onscreen keyboard buttons and update each to use the *key* CSS class, and not use the *chosen* or *wrong* CSS Classes
    3. Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the *liveHeart.png* image.
---
5. Finishing the Project
  - The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements and that your project is ready for sumbission.
    1. **Code Comments** - It's a best practice for development code to be well commented. Replace provided comments with your own to briefly describe your code.
    2. **Code Readability** - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation are consistent.
    3. **Quality Assurance Testing** - This is the keystone step in the development process.
      - Open and run your app.
      - Open the Chrome DevTools Console
      - Pretend to be a user and test all aspects of functionality and every possible state of the app while monitoring the console for bugs and resolving any that arise.

---

## Extra Credit
To get an "exceeds" rating, complete all of the steps below:
---
1. Add Keyboard Functionality
  - Let players use their physical computer keyboard to enter guesses. You'll need to use the *keydown* or *keyup* event.
---
2. Making the Project Your Own
  - The general layout should remain the same, but feel free to make the project your own by experimenting with things like color, background color, font, borders, shadows, transitions, animations, filters, etc.
  - Detail your style changes in your *README.md* file **and** in your submission notes.