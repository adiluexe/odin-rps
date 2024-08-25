let humanScore = 0;
let computerScore = 0;

const humanScoreText = document.querySelector(".human-score");
const computerScoreText = document.querySelector(".computer-score");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random].toUpperCase();
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

function playGame() {
  const choices = document.querySelectorAll(".choices");

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const humanChoice = choice.id.toUpperCase();
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);

      if (humanScore === 5 || computerScore === 5) {
        gameWinner();
        choices.forEach((button) => (button.disabled = true));
      }
    });
  });
}

function gameWinner() {
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, you lost the game.");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
