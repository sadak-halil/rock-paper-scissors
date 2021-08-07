// // function for random computerPlay
// let roundResult;
// let playerScore = 0;
// let computerScore = 0;

// function computerSelection() {
//   let choices = ["rock", "paper", "scissors"];
//   return choices[Math.floor(Math.random() * 3)];
// }

// // function to get user input
// function playerSelection() {
//   let userInput = prompt("Choose your weapon - rock, paper or scissors?");
//   return userInput.toLowerCase();
// }

// //funtion to play one round and get back a `win`, `loose`, `draw` result
// function playRound(player, computer) {
//   if (player === computer) {
//     roundResult = "draw";
//     return roundResult;
//   } else {
//     switch (player) {
//       case `rock`:
//         computer === `scissors`
//           ? (roundResult = "win")
//           : (roundResult = "loose");
//         return roundResult;
//       case `paper`:
//         computer === `rock` ? (playerScore += 1) : (computerScore += 1);
//         return roundResult;
//       case `scissors`:
//         computer === `paper` ? (playerScore += 1) : (computerScore += 1);
//         return roundResult;
//     }
//   }
// }

// //the loop runs rounds on the principle of "5 out of 3" where the draws do not count
// while (playerScore !== 3 && computerScore !== 3) {
//   switch (playRound(playerSelection(), computerSelection())) {
//     case `win`:
//       playerScore += 1;
//       console.log(
//         `You won this round! Score is You(`,
//         playerScore,
//         `) : Computer (`,
//         computerScore,
//         `)`
//       );
//       break;
//     case `loose`:
//       computerScore += 1;
//       console.log(
//         `You lost the round. Score is You(`,
//         playerScore,
//         `) : Computer (`,
//         computerScore,
//         `)`
//       );
//       break;
//     case `draw`:
//       console.log(
//         `Draw round! Score is still You(`,
//         playerScore,
//         `) : Computer (`,
//         computerScore,
//         `)`
//       );
//       break;
//   }
// }

// //display final outcome of the game to the player
// if (computerScore === 3) {
//   console.log("You lost the game!");
// } else {
//   console.log("You won the game!");
// }

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
