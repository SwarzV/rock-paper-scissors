// Declare all the possible options
const options = ["Rock", "Paper", "Scissors"];

// Declare the counter we will use later to know who's the winner of the game
let playerCounter = 0;
let computerCounter = 0;

// Transform the options into numbers to make the logic of the game easier
function numbers(choice) {
    // We will have to do it case-sensitive first to make sure we
    // treat the input correctly even if it's spelt differently, so it matches
    //with our array

    let choiceFormatted = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    let number = options.indexOf(choiceFormatted);
    return number;
}

// To make the computer choice we will just generate a rondom number between 0 and 2
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

//We declare the computer choice in a variable we will use later in the game



// We gonna take the input now to see what the player chooses and once we know, we
// check if that option exists and then we convert it into a number between 0 and 2
function getPlayerChoice() {
    let choice = prompt("We're gonna play Rock, Paper, Scissors, write one of them to play agains the computer: ")
    let playerChoice = numbers(choice)
    return playerChoice;
}

// We declare the player choice in a variable we will use later in the game



// Now we need the logic of the game
function playOneRound(playerChoice, computerChoice) {
    // We will first validate if the player did a right choice, if not we will tell him the options
    if (playerChoice >= 0 && computerChoice <= 2){
        // If they choose the same number it's a draw
        if (playerChoice == computerChoice) {
            playerCounter += 1;
            computerCounter += 1;
            return ("It's a draw, you both chose " + options[playerChoice])
        }
        // We declare all the choices that win for the player
        else if ((playerChoice == 0) && computerChoice == 2) {
            playerCounter += 1;
            return ("You win! Rock beats Scissors")
        }
        else if (playerChoice == 1 && computerChoice == 0) {
            playerCounter += 1;
            return ("You win! Paper beats Rock")
        }
        else if (playerChoice == 2 && computerChoice == 1) {
            playerCounter += 1;
            return ("You win! Scissors beats Rock")
        }
        // And if he doesn't draw or win, then he will lose
        else {
            computerCounter +=1;
            return ("You lose, " + options[computerChoice] + " beats " + options[playerChoice])
        }
    }
    else {
        return ("You didn't write a correct option, the available options are: \n -Rock \n -Paper \n -Scissors")
    }
}

// Let's create the game function to play it more than once
function game() {
    // Create a loop to play the game 5 times
     for (let i=0; i < 5; i++){
    // Initialize the choices of the players
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice()
    // Play the game and show the results of each round with the console.log()
    console.log(playOneRound(playerChoice, computerChoice));
    }
    // Declare the winner using the counter we declared at the start of the script
    if (playerCounter > computerCounter){
        console.log("Congratulations you win!")
    }
    else if (playerCounter < computerCounter){
        console.log("You lost, good luck next time!")
    }
    else if(playerCounter == computerCounter){
        console.log("It's a draw!")
    }
}

// Initialize the game
game()