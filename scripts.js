// Get the computer's choice
function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}
// Get elements from the DOM
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const results = document.querySelector("#results");
const score = document.querySelector("#score");

//Initialize Scores
let humanScore = 0;
let computerScore = 0;

    // Play one round
    function playRound(humanChoice, computerChoice) {

        // Make human choice case-insensitive
        humanChoice = humanChoice.toLowerCase();


        // Tie
        if (humanChoice === computerChoice) {

            results.textContent = 
            `It's a tie! You both chose ${humanChoice}.`;

        }

        // Human wins
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {

            humanScore++;

            results.textContent = 
                `You win! ${humanChoice} beats ${computerChoice}.`;
        }

        // Computer wins
        else {

            computerScore++;

            results.textContent = 
                `You lose! ${computerChoice} beats ${humanChoice}.`;
        }

        //Display Score

        score.textContent =
        `Your score: ${humanScore} | Computer score: ${computerScore}`;

    //Check if the game is over
        checkGameOver();
    }



    // Check for game over
function checkGameOver() {

    if (humanScore === 5) {

        results.textContent = "You won the game!";

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

    } else if (computerScore === 5) {

        results.textContent = "Computer won the game!";

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }


}

    //Rock button

    rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();

    playRound("rock", computerSelection);
});
    //Rock button

    rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();

    playRound("rock", computerSelection);
});
    //Paper button

    paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();

    playRound("paper", computerSelection);
});
    //Scissors button

    scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();

    playRound("scissors", computerSelection);
});

