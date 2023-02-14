
// Declare all the possible options
const options = ["rock", "paper", "scissors"];

// Transform the options into numbers to make the logic of the game easier
function numbers(choice) {
    // We will have to do it case-sensitive first to make sure we
    // treat the input correctly even if it's spelt differently

    let choiceLower = choice.toLowerCase();
    let option = options.includes(choiceLower);

    // Then we check if that option exists in the array, and if it does we get the
    // index number in the array of the option. (Ex: paper would be converted to 1)

    if (option == false) {
        return console.log("Not valid")
    }
    else {
        let number = options.indexOf(choiceLower);
        return number;
    }
}

// To make the computer choice we will just generate a rondom number between 0 and 2
function getComputerChoice() {
    let computerChoice= Math.floor(Math.random() * 3);
    return computerChoice;
}

let computerChoice = getComputerChoice();


// We gonna take the input now to see what the player chooses and once we know, we
// check if that option exists and then we convert it into a number between 0 and 2
function getPlayerChoice(){
    let choice = prompt("Choose an option:")
    let playerChoice = numbers(choice)
    return playerChoice;
}

console.log(getPlayerChoice());


// We have the coices, now we need the logic of the game
/*
function playOneRound(playerChoice, computerChoice){
    if (playerChoice == computerChoice){
        return console.log("It's a draw!");
    }

    if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return console.log("You Win! Rock beats Scissors");
    }
    if (playerChoice)
}
*/