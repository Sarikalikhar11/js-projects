let randomNumber = parseInt(Math.random() * 100 + 1);

const submitGuess = document.querySelector('#submitGuess');
const guessField = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const LowerHi = document.querySelector('.LowerHi');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitGuess.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(guessField.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number  less than or equal to 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame(true);
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`You guessed number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`You guessed number is too high`);
  }
}

function displayGuess(guess) {
  guessField.value = '';
  guesses.innerHTML += `${guess}  `;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess} `;
}

function displayMessage(msg) {
  LowerHi.innerHTML = `<h3>${msg}</h3>`;
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', (e) => {
    displayMessage('Make your first Guess');
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guesses.innerHTML = '';
    lastResult.innerHTML = `${11 - numGuess}`;
    guessField.removeAttribute('disabled');
    resultParas.removeChild(p);
    playGame = true;
    // e.preventDefault();
  });
}

function endGame() {
  guessField.value = '';
  guessField.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  p.style.cursor = 'pointer';
  resultParas.appendChild(p);
  playGame = false;
  newGame();
}
