// function for random computerPlay
let roundResult;
let playerScore = 0;
let computerScore = 0;

function computerSelection() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*3)];
}


// function to get user input
function playerSelection () {
    let userInput = prompt("Choose your weapon - rock, paper or scissors?");
    return userInput.toLowerCase();
}

//funtion to play one round and get back a `win`, `loose`, `draw` result
function playRound (player, computer){
    if (player === computer) {
        roundResult = "draw";
        return roundResult;  
    }
    else {
        switch (player) {
            case `rock`:
                computer === `scissors` ? roundResult = "win" : roundResult = "loose";
                return roundResult;
            case `paper`:
                computer === `rock` ? roundResult = "win" : roundResult = "loose";
                return roundResult;
            case `scissors`:
                computer === `paper` ? roundResult = "win" : roundResult = "loose";
                return roundResult;
        }
    }
}

//the loop runs rounds on the principle of "5 out of 3" where the draws do not count
while (playerScore !== 3 && computerScore !== 3){
    switch (playRound(playerSelection(),computerSelection())) {
        case `win`:
            playerScore += 1;
            console.log(`You won this round! Score is You(`,playerScore,`) : Computer (`,computerScore,`)`);
            break;
        case `loose`:
            computerScore += 1
            console.log(`You lost the round. Score is You(`, playerScore, `) : Computer (`, computerScore,`)`);
            break;
        case `draw`:
            console.log(`Draw round! Score is still You(`, playerScore, `) : Computer (`, computerScore,`)`);
            break;
    }
}

//display final outcome of the game to the player
if (computerScore === 3) {
    console.log ('You lost the game!');
}
else{
    console.log('You won the game!')
}