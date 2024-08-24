let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random].toUpperCase();
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, Scissors? Make your choice.");
  return choice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore++;
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
  } else {
    computerScore++;
    console.log(`You lose this round. ${computerChoice} beats ${humanChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(`Your choice: ${humanSelection}`);
console.log(`Computer's choice: ${computerSelection}`);

playRound(humanSelection, computerSelection);
