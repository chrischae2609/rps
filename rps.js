const results = document.getElementById("results");

function getComputerChoice() {
    const option = Math.floor(Math.random() * 3);
    switch (option) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?: ").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`Tie! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} ties with
        ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}! Next Round!`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        alert("You lose! Paper beats Rock! Next Round!");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("You win! Rock beats Scissors! Next Round!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats Rock! Next Round!");
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("You lose! Scissors beats Paper! Next Round!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert("You lose! Rock beats Scissors! Next Round!");
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats Paper! Next Round!");
        humanScore++;
    }

}

function playGame() {
    let round = 1;
    while (round < 5 || (humanScore < 3 && computerScore < 3)) {
        alert("You: " + humanScore + "\nComputer Score: " + computerScore + "\nround: " + round);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice().toLowerCase();
        playRound(humanChoice, computerChoice);
        round++;
    }
    if (humanScore > computerScore) {
        alert("Congrats! You Won!")
    } else {
        alert("You lost... Do Better...")
    }
}

playGame();