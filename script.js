// Global variables and selectors
let playerScore = 0;
let computerScore = 0;

const gameContainer = document.querySelector(".game-container");
const resultsContainer = document.querySelector(".results-container");
const scoreResults = document.querySelector(".score-results");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const playerChoice = document.querySelector("#player-icon");
const computerChoice = document.querySelector("#computer-icon");
const rockEl = document.querySelector("#rock");
const paperEl = document.querySelector("#paper");
const scissorsEl = document.querySelector("#scissors");

// check if the user's choice beats computer's via accessing this object
const rules = {
  Rock: { name: "Rock", defeats: ["Scissors"] },
  Paper: { name: "Paper", defeats: ["Rock"] },
  Scissors: { name: "Scissors", defeats: ["Paper"] },
};

// Returns Rock, Paper or Scissors value randomly
function computerPlay() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  const randomChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  return randomChoice;
}

// Show the results when game is over
function showResults() {
  gameContainer.style.display = "none";
  resultsContainer.style.display = "flex";

  playerScore > computerScore
    ? (scoreResults.textContent = `Player won with the score of ${playerScore}.`)
    : (scoreResults.textContent = `Computer won with the score of ${computerScore}`);
}

// Update the score and the icons
function updateDom(playerSelection, computerSelection) {
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;

  switch (playerSelection) {
    case "Rock":
      playerChoice.className = "far fa-hand-rock";
      break;
    case "Paper":
      playerChoice.className = "far fa-hand-paper";
      break;
    case "Scissors":
      playerChoice.className = "far fa-hand-scissors";
      break;
  }

  switch (computerSelection) {
    case "Rock":
      computerChoice.className = "far fa-hand-rock";
      break;
    case "Paper":
      computerChoice.className = "far fa-hand-paper";
      break;
    case "Scissors":
      computerChoice.className = "far fa-hand-scissors";
      break;
  }
}

// Compare user's input with a computer's random choice and update the DOM accordingly
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It is a tie...");
  } else {
    const choice = rules[playerSelection];
    if (choice.defeats.includes(computerSelection)) {
      playerScore++;
    } else {
      computerScore++;
    }
  }
  updateDom(playerSelection, computerSelection);

  if (playerScore === 5 || computerScore === 5) {
    showResults();
  }
}

rockEl.addEventListener("click", () => playRound("Rock", computerPlay()));
paperEl.addEventListener("click", () => playRound("Paper", computerPlay()));
scissorsEl.addEventListener("click", () =>
  playRound("Scissors", computerPlay())
);

// // play the game 5 times and determine a winner
// function game() {
//   for (i = 0; i <= 4; i++) {
//     const playerInput = prompt('Enter your choice: "Rock", "Paper" or "Scissors"');
//     const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase(); // player input case insensitive now
//     const computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//   }

//   if (playerScore === computerScore) {
//     console.log(`End of the game. It is a tie. Player score: ${playerScore}, Computer score: ${computerScore}.`
//     );
//   } else if (playerScore > computerScore) {
//     console.log(`End of the game. Player won with the score of ${playerScore}!`);
//   } else {
//     console.log(`End of the game. Computer won with the score of ${computerScore}!`);
//   }
// }
