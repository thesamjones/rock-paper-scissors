function computerPlay (rps) {
    return rps[Math.floor(Math.random() * rps.length)];
}

const rps = ["rock", "paper", "scissors"];

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    }

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            ++playerScore
        return "You Win! Rock beats Scissors!";
        } if (computerSelection === "paper") {
            ++computerScore
        return "You Lose! Paper beats Rock!";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            ++computerScore
        return "You Lose! Scissors beats Paper!";
        } if (computerSelection === "rock") {
            ++playerScore
        return "You Win! Paper beats Rock!";
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            ++computerScore
        return "You Lose! Rock beats Scissors!";
        } if (computerSelection === "paper") {
            ++playerScore
        return "You Win! Scissors beats Paper!"
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay(rps);
        const playerSelection = (prompt("Rock, paper, or scissors?")).toLowerCase();
        console.log(playRound (playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        return "You win!";
    } if (computerScore > playerScore) {
        return "You lose!";
    } if (playerScore === computerScore) {
        return "Stalemate!"
    }
}

let playerScore = 0;
let computerScore = 0;

const computerSelection = computerPlay(rps);
console.log(game());
