const results = document.getElementById("results")
const scores = document.getElementById("scores")
const restart = document.getElementById("restart")

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
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        results.textContent = `Tie! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} ties with
        ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}! Next Round!`;
        scores.textContent = `Your Score: ${humanScore}   Comp Score: ${computerScore}`
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        results.textContent = "You lose! Paper beats Rock! Next Round!";
        scores.textContent = `Your Score: ${humanScore}   Comp Score: ${computerScore}`
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        results.textContent = "You win! Rock beats Scissors! Next Round!";
        scores.textContent = `Your Score: ${humanScore}   Comp Score: ${computerScore}`
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        results.textContent = "You win! Paper beats Rock! Next Round!";
        scores.textContent = `Your Score: ${humanScore}   Comp Score: ${computerScore}`
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        results.textContent = "You lose! Scissors beats Paper! Next Round!";
        scores.textContent = `Your Score: ${humanScore}   Comp Score: ${computerScore}`
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        results.textContent = "You lose! Rock beats Scissors! Next Round!";
        scores.textContent = `Your Score: ${humanScore}   Comp Score: ${computerScore}`
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        results.textContent = "You win! Scissors beats Paper! Next Round!";
        scores.textContent = `Your Score: ${humanScore}   Comp Score: ${computerScore}`
    }
    if (humanScore >= 5 || computerScore >= 5) {
        endGame();
    }
}

function endGame() {
    startBtn.disabled = true;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    if (humanScore > computerScore) {
        results.textContent = "Congrats! You won the game!"
    } else {
        results.textContent = "Dang, you lost :("
    }
    restart.style.display = "block";
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    results.textContent = "";
    startBtn.disabled = false;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
    results.style.display = "none";
    scores.style.display = "none";

    restart.style.display = "none";
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors"); 


const startBtn = document.getElementById("start");
startBtn.addEventListener("click", function() {
    rockBtn.style.display = "block";
    paperBtn.style.display = "block";
    scissorsBtn.style.display = "block";
    results.style.display = "block";
    scores.style.display = "block";
    scores.textContent = `Your Score: 0   Comp Score: 0`

})

rockBtn.addEventListener("click", function() {
    playRound("rock", getComputerChoice());    
});
    
paperBtn.addEventListener("click", function () {
    playRound("paper", getComputerChoice())
});
    
scissorsBtn.addEventListener("click", function () {
    playRound("scissors", getComputerChoice())
});

restart.addEventListener("click", resetGame)