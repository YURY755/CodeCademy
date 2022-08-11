let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = num => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (user, computer, getAbsoluteDistance) => Math.abs(user - getAbsoluteDistance) >= Math.abs(computer - getAbsoluteDistance) ? true : false;



const updateScore = winner => winner === 'human' ? humanScore += 1 : computerScore += 1;

const advanceRound = () => currentRoundNumber += 1;

