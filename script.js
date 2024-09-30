let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

function handleGuess() {
  if (gameOver) return;

  const guess = parseInt(document.getElementById('guessInput').value);
  const feedback = document.getElementById('feedback');
  const attemptsDisplay = document.getElementById('attempts');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.innerText = 'Please enter a valid number between 1 and 100';
    return;
  }

  attempts++;
  attemptsDisplay.innerText = `Attempts: ${attempts}`;
  console.log(randomNumber);
  if (guess === randomNumber) {
    feedback.innerText = `Congratulations! You passed the correct number (${randomNumber}) in ${attempts} attempts!`;
    document.getElementById('guessBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'inline-block';
    gameOver = true;
  } else if (guess > randomNumber) {
    feedback.innerText = 'Too high! Try again.';
  } else {
    feedback.innerText = 'Too low! Try again';
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  gameOver = false;
  document.getElementById('guessInput').value = '';
  document.getElementById('feedback').innerText = '';
  document.getElementById('attempts').innerText = 'Attempts: 0';
  document.getElementById('guessBtn').style.display = 'inline-block';
  document.getElementById('resetBtn').style.display = 'none';
}

document.getElementById('guessBtn').addEventListener('click', handleGuess);
document.getElementById('resetBtn').addEventListener('click', resetGame);
