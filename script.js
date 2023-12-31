'use strict';

const number = Math.floor(Math.random() * 20 + 1);
console.log(number);
document.querySelector('.check').addEventListener('click', () => {
  const userInput = Number(document.querySelector('.guess').value);

  if (!userInput) {
    document.querySelector('.message').textContent = '🛑No number!!';
  } else if (userInput === number) {
    document.querySelector('.message').textContent = 'Correct🏆';
  } else if (userInput > number) {
    document.querySelector('.message').textContent = 'Too high📈';
  } else {
    document.querySelector('.message').textContent = 'Too low📉';
  }
});
