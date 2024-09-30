# Guess the Number Game

A fun and simple web-based game where the player has to guess a randomly generated number between 1 and 100. Built using **HTML**, **CSS**, and **JavaScript**, this game provides feedback for every guess and tracks the number of attempts.

## Features

- Generates a random number between 1 and 100 at the start of each game.
- Provides feedback after each guess: too high, too low, or correct.
- Tracks the number of attempts made by the player.
- Offers a reset button to restart the game after the correct guess.

## Technologies Used

- **HTML**: For the basic structure of the web page.
- **CSS**: For styling the game interface.
- **JavaScript**: For game logic, including random number generation, user input validation, and feedback messages.

## How It Works

1. The game randomly selects a number between 1 and 100 when it starts.
2. The player enters a guess in the input field and clicks the "Guess" button.
3. The game provides feedback:
   - "Too high!" if the guess is larger than the number.
   - "Too low!" if the guess is smaller than the number.
   - "Congratulations!" if the player guesses the number correctly.
4. The game tracks the number of guesses, displayed as "Attempts."
5. When the player guesses correctly, the "Guess" button is hidden, and a "Reset" button appears to restart the game with a new random number.

## Project Structure

- **index.html**: The main structure of the game, including the input field and buttons.
- **style.css**: The styling for the game interface (layout, fonts, colors, etc.).
- **script.js**: The JavaScript file containing the game logic.

## Installation

To run the game locally:

1. Clone or download the repository to your local machine:
   ```bash
   git clone https://github.com/developedbyesh/guess-the-number-game.git
   ```
