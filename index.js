//Keep count of the Score
let playerScore = 0;
let computerScore = 0;
let gameRound = 1;
let isGameOver = false;
const roundNumber = document.querySelector(".round-number");
const roundResultText = document.querySelector(".game-result");
const scoreComputer = document.querySelector(".score-computer");
const scorePlayer = document.querySelector(".score-player");
const buttons = document.querySelector(".choices-container");
const resetButton = document.querySelector("#restart");

//Helper function generates random number between 0 and 2
const getRandomNumber = () => Math.floor(Math.random() * 3);

// Returns a random computer choice by using a random number as the array index
const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[getRandomNumber()];
};

const calculateRoundResult = (playersChoice, computerChoice) => {
  if (playersChoice === computerChoice) {
    return `Computer: ${computerChoice} | It is a draw.`;
  } else if (
    (playersChoice === "rock" && computerChoice === "scissors") ||
    (playersChoice === "paper" && computerChoice === "rock") ||
    (playersChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return `Computer: ${computerChoice} | Player wins.`;
  } else {
    computerScore++;
    return `Computer: ${computerChoice} | Computer wins.`;
  }
};

// Prints rounds result
const printMessage = (roundResult) => {
  roundResultText.textContent = roundResult;
  scorePlayer.textContent = playerScore;
  scoreComputer.textContent = computerScore;
};

// Starts a round of the game
const playRound = (userInput) => {
  const computerChoice = getComputerChoice();
  const roundResult = calculateRoundResult(userInput, computerChoice);
  printMessage(roundResult);
  gameRound++;
  if (gameRound <= 5) {
    roundNumber.textContent = gameRound;
  }
};

const declareWinner = () => {
  if (playerScore > computerScore) {
    roundResultText.textContent = "GAME OVER: You beat the machine!";
  } else if (playerScore < computerScore) {
    roundResultText.textContent = "GAME OVER: The computer wins this time.";
  } else {
    roundResultText.textContent = "GAME OVER: It's a total tie!";
  }
};

const playGame = (userInput) => {
  console.log(userInput);

  if (gameRound <= 5) {
    playRound(userInput);
  }
  if (gameRound > 5) {
    declareWinner();
    buttons.removeEventListener("click", getPlayerChoice);
  }
};

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  gameRound = 1;
  roundNumber.textContent = gameRound;
  scorePlayer.textContent = playerScore;
  scoreComputer.textContent = computerScore;
  roundResultText.textContent = "Make your choice";
  buttons.addEventListener("click", getPlayerChoice);
};

const getPlayerChoice = (event) => {
  const playerChoice = event.target.id;
  playGame(playerChoice);
};
buttons.addEventListener("click", getPlayerChoice);
resetButton.addEventListener("click", resetGame);
