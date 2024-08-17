let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random].toUpperCase();
}

console.log(getComputerChoice());

let getHumanChoice = prompt("Rock, Paper, Scissors? Make your choice");
getHumanChoice.toUpperCase();

console.log(getHumanChoice);

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice;
  computerChoice = getComputerChoice();

  if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore++;
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice == computerChoice) {
    console.log(`It's a tie you both chose ${humanChoice}`);
  } else {
    computerScore++;
    console.log(`You lose this round. ${computerChoice} beats ${humanChoice}`);
  }
}

const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
