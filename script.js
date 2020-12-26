const playerSelection = prompt('Enter your choice: "Rock", "Paper" or "Scissors"').toLowerCase();
const computerSelection = computerPlay();

const rules = {
  rock: { name: "rock", defeats: ["scissors"] },
  paper: { name: "paper", defeats: ["rock"] },
  scissors: { name: "scissors", defeats: ["paper"] },
};

// Returns Rock, Paper or Scissors value randomly
function computerPlay() {
  const computerChoices = ["rock", "paper", "scissors"];
  const randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  return randomChoice;
}


// Compare user's input with a computer's random choice and returns some text
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It is a tie!";
  } else {
    const choice = rules[playerSelection];
    if (choice.defeats.includes(computerSelection)) {
      return `${playerSelection} beats ${computerSelection}. You won!`;
    } else {
      return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
  }
}

playRound(playerSelection, computerSelection);
