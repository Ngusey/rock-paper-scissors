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


// Get the human player's choice
function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors:");
}


// Play the whole game
function playGame() {

    // Scores
    let humanScore = 0;
    let computerScore = 0;


    // Play one round
    function playRound(humanChoice, computerChoice) {

        // Make human choice case-insensitive
        humanChoice = humanChoice.toLowerCase();


        // Tie
        if (humanChoice === computerChoice) {

            console.log(`It's a tie! You both chose ${humanChoice}.`);

        }

        // Human wins
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {

            humanScore++;

            console.log(
                `You win! ${humanChoice} beats ${computerChoice}.`
            );

        }

        // Computer wins
        else {

            computerScore++;

            console.log(
                `You lose! ${computerChoice} beats ${humanChoice}.`
            );
        }
    }


    // Play 5 rounds
    for (let i = 0; i < 5; i++) {

        console.log(`--- Round ${i + 1} ---`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);

        playRound(humanSelection, computerSelection);

        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }


    // Final result
    console.log("--- GAME OVER ---");

    console.log(`Final score - You: ${humanScore}`);
    console.log(`Final score - Computer: ${computerScore}`);


    if (humanScore > computerScore) {

        console.log("🎉 You won the game!");

    } else if (computerScore > humanScore) {

        console.log("💻 Computer won the game!");

    } else {

        console.log("🤝 The game is a tie!");
    }
}


// Start the game
playGame();