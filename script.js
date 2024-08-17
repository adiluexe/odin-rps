function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

console.log(getComputerChoice());

function getHumanChoice(playerChoice) {
  playerChoice = prompt("Rock, Paper, Scissors? Make your choice");
  return playerChoice;
}

console.log(getHumanChoice());
