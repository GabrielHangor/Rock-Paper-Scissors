const playerInput = prompt('Enter your choice: "Rock", "Paper" or "Scissors"');
const playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLocaleLowerCase(); // player input case insensitive now
const computerSelection = computerPlay();


const rules = {
  Rock: { name: "Rock", defeats: ["Scissors"] },
  Paper: { name: "Paper", defeats: ["Rock"] },
  Scissors: { name: "Scissors", defeats: ["Paper"] },
};

// Returns Rock, Paper or Scissors value randomly
function computerPlay() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
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
      return `${playerSelection} beats ${computerSelection}. Player won!`;
    } else {
      return `Player lost! ${computerSelection} beats ${playerSelection}`;
    }
  }
}


// On load
console.log(playRound(playerSelection, computerSelection));
