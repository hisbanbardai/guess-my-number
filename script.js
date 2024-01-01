'use strict';

let number = Math.floor(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const userInput = Number(document.querySelector('.guess').value);

  document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    number = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });

  if (!userInput) {
    document.querySelector('.message').textContent = '🛑No number!!';
  } else if (userInput === number) {
    document.querySelector('.message').textContent = 'Correct🏆';
    document.querySelector('.number').textContent = userInput;

    if (score >= Number(document.querySelector('.highscore').textContent)) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
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
