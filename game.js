// function for random computerPlay
function computerSelection() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*3)];
}


// function to get user input
function playerSelection () {
    let userInput = prompt("Choose your weapon - rock, paper or scissors?");
    return userInput.toLowerCase();
}

function playRound (player, computer){
    if (player === computer) {
        console.log(`draw, player`, player);
        console.log(`draw, computer`, computer);
        let result = "draw";
        console.log("Draw!");
        return result;
    }
    else {
        switch (player) {
            case `rock`:
                computer === `scissors` ? console.log(`You Win!`) : console.log(`You Loose :(`);
                console.log(`rock case player`, player);
                console.log(`rock case computer`, computer);
                break;
            case `paper`:
                computer === `rock` ? console.log(`You Win!`) : console.log(`You Loose :(`);
                console.log(`paper case player`, player);
                console.log(`paper case computer`, computer);
                break;
            case `scissors`:
                computer === `paper` ? console.log(`You Win!`) : console.log(`You Loose :(`);
                console.log(`scissors case player`, player);
                console.log(`scissors case computer`, computer);
                break;
        }
    }
}
playRound(playerSelection(),computerSelection())

/*let playerScore = 0;
let computerScore = 0;
while (playerScore !=3 || computerScore !=3){
    switch (playRound(playerSelection(),computerSelection())) {
        case `You win!`:
    }
}*/


/*

draw - 3 options compare strings with ===
paper - rock
paper - scissors
rock - paper
rock - scissors
scissors - rock
scissors - paper

function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
*/