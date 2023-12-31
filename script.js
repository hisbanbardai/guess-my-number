'use strict';

const number = Math.floor(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const userInput = Number(document.querySelector('.guess').value);

  if (!userInput) {
    document.querySelector('.message').textContent = '🛑No number!!';
  } else if (userInput === number) {
    document.querySelector('.message').textContent = 'Correct🏆';
    document.querySelector('.highscore').textContent = score;
  } else if (userInput > number) {
    document.querySelector('.message').textContent = 'Too high📈';
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Too low📉';
    score -= 1;
    document.querySelector('.score').textContent = score;
  }
});
