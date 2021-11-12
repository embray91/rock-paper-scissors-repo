function computerPlay() {
    let paper = "paper";
    let rock = "rock";
    let scissors = "scissors";
    let rand = Math.floor(Math.random() * 3);
    if (rand == 1) {
        return paper;
    } else if (rand == 2) {
        return rock;
    } else {
        return scissors;
    }
}
const win = "You win!";
const lose = "You lose!";
const draw = "Draw!";

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return win;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return lose;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return win;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return lose;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return win;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return lose;
    } else if (playerSelection.toLowerCase() == computerSelection) {
        return draw;
    }
}

function game() {
    let compScore=0;
    let playerScore=0;
    for (let i=0; i<=5; i++) {
    let playerSelection = prompt("Choose your weapon.");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result == win) {
    playerScore++;
    } else if (result == lose) {
    compScore++;
    } else if (result == draw) {
        continue;
    }
    } alert(`The final score for the computer is ${compScore} and the final score for you is ${playerScore} !`);
}