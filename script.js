
let playerScore = 0;
let computerScore = 0;

// check if the user's choice beats computer's via accessing this object
const rules = {
  Rock: { name: "Rock", defeats: ["Scissors"] },
  Paper: { name: "Paper", defeats: ["Rock"] },
  Scissors: { name: "Scissors", defeats: ["Paper"] },
};

// Returns Rock, Paper or Scissors value randomly
function computerPlay() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  let randomChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  return randomChoice;
}

// Compare user's input with a computer's random choice and returns some text
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It is a tie! Player score: ${playerScore}, Computer score: ${computerScore}`;
  } else {
    const choice = rules[playerSelection];
    if (choice.defeats.includes(computerSelection)) {
      playerScore++;
      return `Player won! ${playerSelection}(player) beats ${computerSelection}(computer). Player score: ${playerScore}, Computer score: ${computerScore}.`;
    } else {
      computerScore++;
      return `Player lost! ${playerSelection}(player) loses to ${computerSelection}(computer). Player score: ${playerScore}, Computer score: ${computerScore}.`;
    }
  }
}

// playe the game 5 times and determine a winner
function game() {
  for (i = 0; i <= 4; i++) {
    const playerInput = prompt('Enter your choice: "Rock", "Paper" or "Scissors"');
    const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase(); // player input case insensitive now
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore === computerScore) {
    console.log(`End of the game. It is a tie. Player score: ${playerScore}, Computer score: ${computerScore}.`
    );
  } else if (playerScore > computerScore) {
    console.log(`End of the game. Player won with the score of ${playerScore}!`);
  } else {
    console.log(`End of the game. Computer won with the score of ${computerScore}!`);
  }
}

// On load
game();
