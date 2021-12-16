// Modal

const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

const openModal = () => {
	modal.style.display = 'block';
};
const closeModal = () => {
	modal.style.display = 'none';
};

openBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

// Constants

// const playButton = document.querySelector('#play-button');
// const questionEl = document.querySelector('#questions');
// const nextButton = document.querySelector('#next-button');
// const restartButton = document.querySelector('#restart-button');
// const questionDisplay = document.querySelector('.container');
// const choiceOne = document.querySelector('#choice-one');
// const choiceTwo = document.querySelector('#choice-two');
// const choiceThree = document.querySelector('#choice-three');
// const choiceFour = document.querySelector('#choice-four');
// const selectAnswer = document.querySelector('#answer-choices');
// const submitButton = document.querySelector('#submit-button');

// // Variables

// let score = 0;
// let currentQuestion = 0;
// let questionNumber = 0;
// let allQuestions = [];

// // Event Listeners

// // Functions
// function playGame() {}
// function nextQuestion(e) {}
// function showAnswer() {}
// function correctAnswer() {}
// function wrongAnswer() {}

// // Questions

// const questions = [
// 	{
// 		question1: 'Who pees on Monica after she is stung by a jellyfish?',
// 		answers: {
// 			choice1: 'Ross',
// 			choice2: 'Rachel',
// 			choice3: 'Chandler',
// 			choice4: 'Joey',
// 		},
// 		correctAnswer: 'choice3',
// 	},
// 	{
// 		question2: 'What is the name of Joeys stuffed penguin?',
// 		answers: {
// 			choice1: 'Cuddles',
// 			choice2: 'Hugsy',
// 			choice3: 'Fuzzy',
// 			choice4: 'Snuggles',
// 		},
// 		correctAnswer: 'choice2',
// 	},
// 	{
// 		question3: 'How many sisters does Joey have?',
// 		answers: {
// 			choice1: 'four',
// 			choice2: 'two',
// 			choice3: 'none',
// 			choice4: 'seven',
// 		},
// 		correctAnswer: 'choice4',
// 	},
// 	{
// 		question4: 'What is Chandler Bings middle name?',
// 		answers: {
// 			choice1: 'Rose',
// 			choice2: 'Michael',
// 			choice3: 'Mary',
// 			choice4: 'Murial',
// 		},
// 		correctAnswer: 'choice4',
// 	},
// 	{
// 		question5: 'Phoebe attempts to teach Joey what language?',
// 		answers: {
// 			choice1: 'Spanish',
// 			choice2: 'French',
// 			choice3: 'Arabic',
// 			choice4: 'Russian',
// 		},

// 		correctAnswer: 'choice2',
// 	},
// 	{
// 		question6: 'Which character famously said, "PIVOT"?',
// 		answers: {
// 			choice1: 'Joey',
// 			choice2: 'Chandler',
// 			choice3: 'Ross',
// 			choice4: 'Gunther',
// 		},
// 		correctAnswer: 'choice3',
// 	},
// 	{
// 		question7: 'What holiday does Chandler hate?',
// 		answers: {
// 			choice1: 'Halloween',
// 			choice2: 'Christmas',
// 			choice3: 'Thanksgiving',
// 			choice4: 'Easter',
// 		},
// 		correctAnswer: 'choice3',
// 	},
// 	{
// 		question8: 'Monica could not tell time until what age?',
// 		answers: {
// 			choice1: 'seven',
// 			choice2: 'ten',
// 			choice3: 'eight',
// 			choice4: 'thirteen',
// 		},
// 		correctAnswer: 'choice4',
// 	},
// 	{
// 		question9:
// 			'Chandler told Janice he was moving where to avoid seeing her again?',
// 		answers: {
// 			choice1: 'Yemen',
// 			choice2: 'Ethiopia',
// 			choice3: 'Somalia',
// 			choice4: 'Egypt',
// 		},
// 		correctAnswer: 'choice1',
// 	},
// 	{
// 		question10:
// 			"Which one of Monica's boyfriends wanted to become the Ultimate Fighting Champion?",
// 		answers: {
// 			choice1: 'Paul',
// 			choice2: 'Richard',
// 			choice3: 'Pete',
// 			choice4: 'Julio',
// 		},
// 		correctAnswer: 'choice3',
// 	},
// 	{
// 		question11: 'Monica and Chandler first got together where?',
// 		answers: {
// 			choice1: 'New York',
// 			choice2: 'London',
// 			choice3: 'Paris',
// 			choice4: 'Las Vegas',
// 		},
// 		correctAnswer: 'choice2',
// 	},
// 	{
// 		question12: 'What food caused Ross to get sick on Space Mountain?',
// 		answers: {
// 			choice1: 'Tacos',
// 			choice2: 'Pizza',
// 			choice3: 'Hot Dogs',
// 			choice4: 'Seafood',
// 		},
// 		correctAnswer: 'choice1',
// 	},
// ];

// // Answers

// const correctAnswer = [
// 	'choice3',
// 	'choice2',
// 	'choice4',
// 	'choice4',
// 	'choice2',
// 	'choice3',
// 	'choice3',
// 	'choice4',
// 	'choice1',
// 	'choice3',
// 	'choice2',
// 	'choice1',
// ];
