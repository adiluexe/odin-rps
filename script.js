let humanScore = 0;
let computerScore = 0;

const humanScoreText = document.querySelector("#human-score");
const computerScoreText = document.querySelector("#computer-score");

const humanChoiceText = document.querySelector(".human-choice");
const computerChoiceText = document.querySelector(".computer-choice");
const roundResultText = document.querySelector(".round-result");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random].toUpperCase();
}

function playRound(humanChoice, computerChoice) {
  humanChoiceText.textContent = `Human chose ${humanChoice}`;
  computerChoiceText.textContent = `Computer chose ${computerChoice}`;
  if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore++;
    humanScoreText.textContent = humanScore;
    roundResultText.textContent = `${humanChoice} beats ${computerChoice}. You win this round!`;
  } else if (humanChoice === computerChoice) {
    roundResultText.textContent = `It's a tie! You both chose ${humanChoice}.`;
  } else {
    computerScore++;
    computerScoreText.textContent = computerScore;
    roundResultText.textContent = `${computerChoice} beats ${humanChoice}. You lose this round.`;
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
        roundResultText.textContent = "";
        gameWinner();
        choices.forEach((button) => (button.disabled = true));
      }
    });
  });
}

function gameWinner() {
  const gameResultText = document.querySelector(".game-result");
  if (humanScore > computerScore) {
    gameResultText.textContent = "Congratulations! You won the game!";
  } else if (computerScore > humanScore) {
    gameResultText.textContent = "Sorry, you lost this game.";
  } else {
    gameResultText.textContent = "It's a tie game!";
  }
}

playGame();
