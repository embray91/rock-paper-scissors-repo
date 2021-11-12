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

function playRound(playerSelection, computerSelection) {
    let win = "You win!";
    let lose = "You lose!";
    if (playerSelection.toLowerCase() == "rock" && computerPlay == "scissors") {
        return win;
    } else if (playerSelection.toLowerCase() == "rock" && computerPlay == "paper") {
        return lose;
    } else if (playerSelection.toLowerCase() == "scissors" && computerPlay == "paper") {
        return win;
    } else if (playerSelection.toLowerCase() == "scissors" && computerPlay == "rock") {
        return lose;
    } else if (playerSelection.toLowerCase() == "paper" && computerPlay == "rock") {
        return win;
    } else if (playerSelection.toLowerCase() == "paper" && computerPlay == "scissors") {
        return lose;
    }
}
