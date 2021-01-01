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
const restartBtn = document.querySelector("button");

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
    : (scoreResults.textContent = `Computer won with the score of ${computerScore}.`);

  setTimeout(() => {
    restartBtn.style.visibility = "visible";
  }, 700);
}

// Set everything to default
function restartGame() {
  gameContainer.style.display = "flex";
  resultsContainer.style.display = "none";
  playerScore = 0;
  computerScore = 0;
  scoreResults.textContent = "";
  playerChoice.className = "";
  computerChoice.className = "";
  playerScoreDisplay.textContent = "Player: 0";
  computerScoreDisplay.textContent = "Computer: 0";
  restartBtn.style.visibility = "hidden";
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
restartBtn.addEventListener("click", restartGame);
