
// Reutrns Rock, Paper or Scissors value randomly
function computerPlay() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  const randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  return randomChoice;
}


