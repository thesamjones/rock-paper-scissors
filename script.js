function computerPlay (rps) {
    return rps[Math.floor(Math.random() * rps.length)];
}

const rps = ["rock", "paper", "scissors"];

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors")
        return "You Win! Rock beats Scissors!";
        if (computerSelection === "paper")
        return "You Lose! Paper beats Rock!";
        if (computerSelection === "rock")
        return "It's a tie!"
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors")
        return "You Lose! Scissors beats Paper!";
        if (computerSelection === "rock")
        return "You Win! Paper beats Rock!";
        if (computerSelection === "paper")
        return "It's a tie!"
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "scissors")
        return "It's a tie!";
        if (computerSelection === "rock")
        return "You Lose! Rock beats Scissors!";
        if (computerSelection === "paper")
        return "You Win! Scissors beats Paper!"
    }
}

function game() {
    
}

const playerSelection = (prompt("Rock, paper, or scissors?")).toLowerCase();
const computerSelection = computerPlay(rps);
console.log(playRound(playerSelection, computerSelection));
