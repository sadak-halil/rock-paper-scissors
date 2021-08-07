let roundResult = ``;
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const displayPlayerScore = document.querySelector(".displayPlayerScore");
const displayComputerScore = document.querySelector(".displayComputerScore");
const scoreBoard = document.querySelector("body");

const updateScore = (playerScore, computerScore) => {
  displayPlayerScore.textContent = playerScore;
  displayComputerScore.textContent = computerScore;
};

const gameEndMessage = (playerScore, computerScore) => {
  const message = document.createElement("div");
  if (playerScore === 5) {
    message.textContent = `Congratulations, you won!`;
    return message;
  } else if (computerScore === 5) {
    message.textContent = `You lost, better luck next time`;
    return message;
  }
  return message;
};

// the whole round logic and computer's random selection happens in this function and returns a result of the round
const playRound = (e) => {
  const player = e.target.value;
  const computer = choices[Math.floor(Math.random() * 3)];
  //TODO put the console log in browser
  console.log(`You picked ${player}, and computer picked ${computer}`);
  if (player === computer) return;
  switch (player) {
    case `rock`:
      computer === `scissors` ? playerScore++ : computerScore++;
      updateScore(playerScore, computerScore);
      scoreBoard.appendChild(gameEndMessage(playerScore, computerScore));
      //TODO 1: add a reset button
      //TODO 2: remove even listener on other buttons to prevent continuation of the current game
      //TODO 3: fix styling of gameEndMessage
      break;
    case `paper`:
      computer === `rock` ? playerScore++ : computerScore++;
      updateScore(playerScore, computerScore);
      scoreBoard.appendChild(gameEndMessage(playerScore, computerScore));
      break;
    case `scissors`:
      computer === `paper` ? playerScore++ : computerScore++;
      updateScore(playerScore, computerScore);
      scoreBoard.appendChild(gameEndMessage(playerScore, computerScore));
      break;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});
