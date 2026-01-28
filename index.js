//Helper function generates random number between 0 and 2
const getRandomNumber = () => Math.floor(Math.random() * 3);

// Returns a random computer choice by using a random number as the array index
const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[getRandomNumber()];
};

console.log(getComputerChoice());
