'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

const changeContent = function (query, content) {
	document.querySelector(query).textContent = content;
};

document.querySelector('.check').addEventListener('click', PlayRound);

function PlayRound() {
	const guess = Number(document.querySelector('.guess').value);

	if (currentScore > 1) {
		if (!guess) {
			changeContent('.message', '🚫 Please enter a number');
		} else if (guess === secretNumber) {
			changeContent('.message', '🎉 Correct!');
			changeContent('.number', secretNumber);

			document.querySelector('body').style.backgroundColor = '#60b347';
			document.querySelector('.number').style.width = '30rem';

			if (currentScore > highScore) {
				highScore = currentScore;
				changeContent('.highscore', highScore);
			}
		} else if (guess > secretNumber) {
			changeContent('.message', '📈 Too high!');
			currentScore--;
		} else if (guess < secretNumber) {
			changeContent('.message', '📉 Too low!');
			currentScore--;
		}
	} else {
		changeContent('.message', '😟 You lost!');
	}

	document.querySelector('.score').textContent = currentScore;
}

document.querySelector('.again').addEventListener('click', ResetGame);

function ResetGame() {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	currentScore = 20;

	changeContent('.number', '?');
	changeContent('.message', 'Start guessing...');
	changeContent('.guess', '');
	changeContent('.score', currentScore);

	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
}
