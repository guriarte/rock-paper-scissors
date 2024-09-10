let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random() * 100;

  if (randomNumber >= 0 && randomNumber < 33) {
    return "rock";
  } else if (randomNumber >= 33 && randomNumber < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();

  do {
    if (
      humanChoice != "scissors" &&
      humanChoice != "paper" &&
      humanChoice != "rock"
    ) {
      console.log("Invalid input, try again");
      humanChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    }
  } while (
    humanChoice != "scissors" &&
    humanChoice != "paper" &&
    humanChoice != "rock"
  );

  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("It's a draw!");
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  do {
    console.log(`Human score: ${humanScore}
Computer score: ${computerScore}`);

    playRound(getHumanChoice(), getComputerChoice());
  } while (humanScore < 5 && computerScore < 5);

  if (humanScore == 5) {
    console.log(
      "You got 5 points total and you won the game! Congratulations!"
    );
  } else {
    console.log("Game over!");
  }
}

playGame();
