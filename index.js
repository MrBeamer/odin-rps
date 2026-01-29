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

getPlayersChoice();
console.log(getComputerChoice());
/* 
start game 
Get random computer choice 
Get players choice
Calculate winner
Display winner 
count Wins
reset game
*/
