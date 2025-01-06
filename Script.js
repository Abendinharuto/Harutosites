// Rock, Paper, Scissors Game
function playRPS() {
    const choices = ["Rock", "Paper", "Scissors"];
    const userChoice = prompt("Choose: Rock, Paper, or Scissors");
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result = "";
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    document.getElementById("rps-result").innerText = `Computer chose: ${computerChoice}. ${result}`;
}

// Guess the Number Game
let randomNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
    const userGuess = parseInt(document.getElementById("guess").value);
    let result = "";
    
    if (userGuess === randomNumber) {
        result = "Correct! You guessed the number!";
    } else {
        result = "Wrong guess! Try again.";
    }
    
    document.getElementById("number-result").innerText = result;
}

// Click Me Game
let clickCount = 0;

function clickMe() {
    clickCount++;
    document.getElementById("click-count").innerText = `You clicked ${clickCount} times.`;
}
