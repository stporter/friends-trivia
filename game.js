// const scoreText = document.querySelector('#score');
// const questionText = document.querySelector('#question');
// const answerOptions = document.querySelector('.answer-buttons');
// const answerSelect = document.querySelector();

// function currentQuestionText(question) {
// 	ques
// }

// let questionScore = 0;
// let currentQuestion = 1;

const askedQuestion = document.querySelector('#question');
const scoreText = document.querySelector('#score');
const answerSelect = document.querySelector('.answer-buttons');
const buttonOne = document.querySelector('#btn1');
const buttonTwo = document.querySelector('#btn2');
const buttonThree = document.querySelector('#btn3');
const buttonFour = document.querySelector('#btn4');

// let questionText = questions.question1.question;
// let choiceOne = questions.question1.choices[0];
// let choiceTwo = questions.question1.choices[1];
// let choiceThree = questions.question1.choices[2];
// let choiceFour = questions.question1.choices[3];
// let score = 0;
// let currentQuestion = 1;

// buttonOne.addEventListener('click', correctAnswer);
// buttonTwo.addEventListener('click', correctAnswer);
// buttonThree.addEventListener('click', correctAnswer);
// buttonFour.addEventListener('click', correctAnswer);

const questions = {
	question1: {
		question: 'Who pees on Monica after she is stung by a jellyfish?',
		choices: ['Ross', 'Rachel', 'Chandler', 'Joey'],
	},
	question2: {
		question: 'What is the name of Joeys stuffed penguin?',
		choices: ['Cuddles', 'Hugsy', 'Fuzzy', 'Snuggles'],
	},
	question3: {
		question: 'How many sisters does Joey have?',
		choices: ['four', 'two', 'none', 'seven'],
	},
	question4: {
		question: 'What is Chandler Bings middle name?',
		choices: ['Rose', 'Michael', 'Mary', 'Murial'],
	},
	question5: {
		question: 'Phoebe attempts to teach Joey what language?',
		choices: ['Spanish', 'French', 'Arabic', 'Russian'],
	},
	question6: {
		question: 'Which character famously said, "PIVOT"?',
		choices: ['Joey', 'Chandler', 'Ross', 'Gunther'],
	},
	question7: {
		question: 'What holiday does Chandler hate?',
		choices: ['Halloween', 'Christmas', 'Thanksgiving', 'Easter'],
	},
	question8: {
		question: 'Monica could not tell time until what age?',
		choices: ['seven', 'ten', 'eight', 'thirteen'],
	},
	question9: {
		question:
			'Chandler told Janice he was moving where to avoid seeing her again?',
		choices: ['Yemen', 'Ethiopia', 'Somalia', 'Egypt'],
	},
	question10: {
		question:
			'Which one of Monicas boyfriends wanted to become the Ultimate Fighting Champion?',
		choices: ['Paul', 'Richard', 'Pete', 'Julio'],
	},
	question11: {
		question: 'Monica and Chandler first got together where?',
		choices: ['New York', 'London', 'Paris', 'Las Vegas'],
	},
	question12: {
		question: 'What food caused Ross to get sick on Space Mountain?',
		choices: ['Tacos', 'Pizza', 'Hot Dogs', 'Seafood'],
	},
};

const correctAnswer = [
	'btn1',
	'btn2',
	'btn2',
	'btn4',
	'btn3',
	'btn4',
	'btn3',
	'btn4',
	'btn1',
	'btn3',
	'btn2',
	'btn1',
];

// function nextQuestion(e) {
// 	currentQuestion++;
// 	let nextQuestion;
// 	nextQuestion = questions[`question${showCurrentQuestion}`];

// 	for (let i = 0; i < answers.length; i++) {
// 		answers[i];
// 	}
// 	askedQuestion.innerText = `${nextQuestion.question}?`;
// 	buttonOne.innerText = nextQuestion.choices[0];
// 	buttonTwo.innerText = nextQuestion.choices[1];
// 	buttonThree.innerText = nextQuestion.choices[2];
// 	buttonFour.innerText = nextQuestion.choices[3];
// }

buttonOne.addEventListener('click', checkCorrectAnswer);
buttonTwo.addEventListener('click', checkCorrectAnswer);
buttonThree.addEventListener('click', checkCorrectAnswer);
buttonFour.addEventListener('click', checkCorrectAnswer);

function showCurrentQuestion() {
	askedQuestion.innerHTML = `<h1>${questionText}</h1>`;
}

function answerText(choiceOne, choiceTwo, choiceThree, choiceFour) {
	buttonOne.innerText = choiceOne;
	buttonTwo.innerText = choiceTwo;
	buttonThree.innerText = choiceThree;
	buttonFour.innerText = choiceFour;
}

let questionText = questions.question1.question;
let choiceOne = questions.question1.choices[0];
let choiceTwo = questions.question1.choices[1];
let choiceThree = questions.question1.choices[2];
let choiceFour = questions.question1.choices[3];
let questionScore = 0;
let currentQuestion = 1;
correctQuestionCounter = 0;
let score;

showCurrentQuestion();
answerText(choiceOne, choiceTwo, choiceThree, choiceFour);

// let questionText = questions.question1.question;

function generateNextQuestion(e) {
	// if (i < questions.length - 1) {
	// 	i++;
	// }
	currentQuestion++;
	let nextQuestion;
	nextQuestion = questions[`question${currentQuestion}`];

	for (let i = 0; i < correctAnswer.length; i++) {
		correctAnswer[i];

		askedQuestion.innerHTML = `${nextQuestion.question}?`;
		buttonOne.innerText = nextQuestion.choices[0];
		buttonTwo.innerText = nextQuestion.choices[1];
		buttonThree.innerText = nextQuestion.choices[2];
		buttonFour.innerText = nextQuestion.choices[3];
	}
}

// function checkCorrectAnswer(e) {
// 	let selectedAnswer;
// 	if (selectedAnswer === correctAnswer[currentQuestion - 1]) {
// 		correctQuestionCounter += 1;
// 	}
// 	generateNextQuestion();
// }
function checkCorrectAnswer(e) {
	let selectedAnswer = this.id;
	if (selectedAnswer === correctAnswer[currentQuestion - 1]) {
		questionScore += 1;
	}
	function generateUserScore() {
		score = questionScore * 10;
		scoreText.innerHTML = `<h4>Score: ${score} points</h4>`;
	}
	generateUserScore();
	generateNextQuestion();
}
