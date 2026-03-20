🕹️ Rock Paper Scissors - MVC Edition
A clean, object-oriented implementation of the classic Rock Paper Scissors game, built using the Model-View-Controller (MVC) architectural pattern.

🏗️ Architecture Overview
This project is divided into three distinct classes to ensure a clear separation of concerns:

1. GameModel (The Data)
The "Source of Truth" for the game state. It handles the logic for scores and round counting.

Encapsulation: Uses internal properties (_property) with public Getters and Setters.

State Management: Tracks playerScore, computerScore, and gameRound.

Reset Logic: Features a resetModel() method to clear data without reloading the page.

2. GameView (The Interface)
The "Skin" of the application. It has zero knowledge of the game rules; its only job is to touch the DOM.

Field Caching: Uses Class Fields to store DOM elements like .round-number and #restart for high performance.

Rendering: Specialized methods like printNumber() and printRoundResultText() to update the UI.

3. GameController (The Brain)
The "Mediator" that connects the Model and the View.

Event Handling: Listens for player choices and reset clicks.

Game Logic: Contains the calculateRoundResult() engine and the playGame() loop.

Flow Control: Manages the transition between playing rounds and declaring a final winner at Round 5.

🚀 Key Features
Automatic ID Generation: Uses player input IDs directly from the buttons to determine choices.

Proactive UI Updates: The View updates immediately after the Model processes a point.

Scalable Code: The logic is decoupled, making it easy to add new features (like "Lizard Spock" mode) without breaking the existing code.

🛠️ How to Run

The game initializes automatically via the const game = new GameController(); instance.