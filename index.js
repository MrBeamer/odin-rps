//Keep count of the Score
let playerScore = 0;
let computerScore = 0;
let gameRound = 1;

//Helper function generates random number between 0 and 2
const getRandomNumber = () => Math.floor(Math.random() * 3);

// Returns a random computer choice by using a random number as the array index
const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[getRandomNumber()];
};

// Returns a players choice by using a prompt
const getPlayersChoice = () => {
  const playersChoice = prompt("Enter your choice: rock, paper, or scissors:")
    .toLowerCase()
    .trim();
  return playersChoice;
};

const calculateRoundResult = (playersChoice, computerChoice) => {
  if (playersChoice === computerChoice) {
    return `Player: ${playersChoice} | Computer: ${computerChoice} | It is a draw.`;
  } else if (playersChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    return `Player: ${playersChoice} | Computer: ${computerChoice} | Player wins.`;
  } else if (playersChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    return `Player: ${playersChoice} | Computer: ${computerChoice} | Player wins.`;
  } else if (playersChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    return `Player: ${playersChoice} | Computer: ${computerChoice} | Player wins.`;
  } else {
    computerScore++;
    return `Player: ${playersChoice} | Computer: ${computerChoice} | Computer wins.`;
  }
};

// Prints rounds result
const printMessage = (roundResult) => {
  console.log(roundResult);
  console.log(
    `Player-Score: ${playerScore} | Computer-Score: ${computerScore}`,
  );
};

// Starts a round of the game
const playRound = () => {
  console.log(`Round: ${gameRound++}`);
  const playersChoice = getPlayersChoice();
  const computerChoice = getComputerChoice();
  const roundResult = calculateRoundResult(playersChoice, computerChoice);
  printMessage(roundResult);
};

const playGame = () => {
  while (gameRound <= 5) {
    // Calls functions and set playersChoice and computerChoice to returned values
    playRound();
  }
  if (playerScore > computerScore) {
    console.log("GAME OVER: You beat the machine!");
  } else if (playerScore < computerScore) {
    console.log("GAME OVER: The computer wins this time.");
  } else {
    console.log("GAME OVER: It's a total tie!");
  }
};
playGame();
