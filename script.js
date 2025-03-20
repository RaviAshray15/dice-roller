const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const containerDisplay = document.getElementById("containerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    }
    else {
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                result = "You win!!!";
            }
            else {
                result = "You lose!";
            }
        }
        else if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                result = "You win!!!";
            }
            else {
                result = "You lose!";
            }
        }
        else if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                result = "You win!!!";
            }
            else {
                result = "You lose!";
            }
        }
    }
    playerDisplay.textContent = `Player : ${playerChoice}`;
    computerDisplay.textContent = `Computer : ${computerChoice}`;
    resultDisplay.textContent = result.toUpperCase();

    
    if (result == "You win!!!") {
        playerScore++;
        resultDisplay.style.color = "lime";
    }
    else if (result == "You lose!") {
        computerScore++;
        resultDisplay.style.color = "red";
    }
    else{
        resultDisplay.style.color = "#0DCAF0";
    }

    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}