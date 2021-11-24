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
};

const win = "You win!";
const lose = "You lose!";
const draw = "Draw!";

let playerScore = 0;
let compScore=0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        result.textContent=win;
        playerScore=playerScore+1;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        result.textContent=lose;
        compScore=compScore+1;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        result.textContent=win;
          playerScore=playerScore+1;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        result.textContent=lose;
        compScore=compScore+1;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        result.textContent=win;
           playerScore=playerScore+1;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        result.textContent=lose;
        compScore=compScore+1;
    } else if (playerSelection.toLowerCase() == computerSelection) {
        result.textContent=draw;
    } 
}



const container = document.querySelector('#container');
const result = document.querySelector('#result');
let p = document.querySelector('#num');


const choose = (e) => {
    const choice = e.currentTarget.id; 
    const compPlay = computerPlay();
    playRound(choice, compPlay);
    p.textContent= `The player's score is ${playerScore} and the computer's score is ${compScore}.`
    result.appendChild(p);
if (playerScore === 5) {
    alert(`You are the winner!`)
    playerScore=0;
    compScore=0;
    p.textContent= `The player's score is ${playerScore} and the computer's score is ${compScore}.`
} else if (compScore ===5) {
    alert(`The computer wins!`);
    playerScore=0;
    compScore=0;
    p.textContent= `The player's score is ${playerScore} and the computer's score is ${compScore}.`
}
};

document.querySelector('#rock').addEventListener('click', choose);
document.querySelector('#paper').addEventListener('click', choose);
document.querySelector('#scissors').addEventListener('click', choose);

container.appendChild(result);

