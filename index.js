class GameModel {
  // Holds game Data, possible to set and get data from outside
  _gameRound = 1;
  _isGameOver = false;
  constructor() {
    this._playerScore = 0;
    this._computerScore = 0;
  }

  incrementPlayerScore() {
    ++this._playerScore;
  }

  get playerScore() {
    return this._playerScore;
  }

  set playerScore(number) {
    this._playerScore = number;
  }

  incrementComputerScore() {
    ++this._computerScore;
  }

  get computerScore() {
    return this._computerScore;
  }

  set computerScore(number) {
    this._computerScore = number;
  }

  set upDateGameOver(state) {
    this._isGameOver = state;
  }

  set gameRound(str) {
    this._gameRound = str;
  }

  get gameRound() {
    return this._gameRound;
  }

  incrementGameRound() {
    ++this._gameRound;
  }

  resetModel() {
    this.computerScore = 0;
    this.playerScore = 0;
    this.gameRound = 1;
  }
}
//////////////////////////////////////////////////////////////////////////////
class GameView {
  // Make all required dom elements available
  _roundNumber = document.querySelector(".round-number");
  _roundResultText = document.querySelector(".game-result");
  _scoreComputer = document.querySelector(".score-computer");
  _scorePlayer = document.querySelector(".score-player");
  _buttons = document.querySelector(".choices-container");
  _resetButton = document.querySelector("#restart");

  // UI displays & updates Scores and Round
  printNumber(roundNumber, playerScore, computerScore) {
    this._roundNumber.textContent = roundNumber;
    this._scorePlayer.textContent = playerScore;
    this._scoreComputer.textContent = computerScore;
  }
  // UI displays winner or loser of the round
  printRoundResultText(text) {
    this._roundResultText.textContent = text;
  }

  resetView() {
    this.printNumber(0, 0, 0);
    this.printRoundResultText("Make your choice");
  }
}
//////////////////////////////////////////////////////////////////////////////
class GameController {
  constructor() {
    this._view = new GameView();
    this._model = new GameModel();
    this._view._buttons.addEventListener("click", (event) =>
      this.getPlayerChoice(event),
    );
    this._view._resetButton.addEventListener("click", (event) =>
      this.resetGame(event),
    );
  }

  //Helper function generates random number between 0 and 2
  getRandomNumber() {
    return Math.floor(Math.random() * 3);
  }

  // Returns a random computer choice by using a random number as the array index
  getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[this.getRandomNumber()];
  }

  // Calculate winner based on player input and computer random input
  calculateRoundResult(playersChoice, computerChoice) {
    if (playersChoice === computerChoice) {
      return `Computer: ${computerChoice} | It is a draw.`;
    } else if (
      (playersChoice === "rock" && computerChoice === "scissors") ||
      (playersChoice === "paper" && computerChoice === "rock") ||
      (playersChoice === "scissors" && computerChoice === "paper")
    ) {
      this._model.incrementPlayerScore();
      return `Computer: ${computerChoice} | Player wins.`;
    } else {
      this._model.incrementComputerScore();
      return `Computer: ${computerChoice} | Computer wins.`;
    }
  }

  // Starts a round of the game
  playRound(userInput) {
    const computerChoice = this.getComputerChoice();
    const roundResult = this.calculateRoundResult(userInput, computerChoice);
    const playerScore = this._model.playerScore;
    const computerScore = this._model.computerScore;
    console.log(roundResult);
    this._model.incrementGameRound();
    const gameRound = this._model.gameRound;
    this._view.printNumber(gameRound, playerScore, computerScore);
    this._view.printRoundResultText(roundResult);
  }

  // Creates the game frame how many rounds played and when winner is declared
  playGame(userInput) {
    const gameRound = this._model.gameRound;

    if (gameRound < 5) {
      this.playRound(userInput);
    }
    if (gameRound === 5) {
      this.declareWinner();
      return;
    }
  }

  // Get player input
  getPlayerChoice(event) {
    const playerChoice = event.target.id;
    this.playGame(playerChoice);
  }

  // Based on the end player and computer score winner gets declared
  declareWinner() {
    const playerScore = this._model.playerScore;
    const computerScore = this._model.computerScore;
    if (playerScore > computerScore) {
      this._view.printRoundResultText("GAME OVER: You beat the machine!");
    } else if (playerScore < computerScore) {
      this._view.printRoundResultText(
        "GAME OVER: The computer wins this time.",
      );
    } else {
      this._view.printRoundResultText("GAME OVER: It's a total tie!");
    }
  }

  // Resets the UI and the game data
  resetGame() {
    this._model.resetModel();
    this._view.resetView();
  }
}
// Initiates the Game (without this controller is not usable)
const game = new GameController();
