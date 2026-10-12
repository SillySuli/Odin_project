"use strict"
console.log("Hello User!");

let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () =>{

    let choice = Math.floor(Math.random() * 100);
    let value;

    if (choice < 33){               // 33% change for each
        value = "rock";
    } else if (choice > 66){
        value = "paper";
    } else {
        value = "scissor";
    }
    return value;
}

let getHumanChoice = () =>{

    let choice = prompt("Enter your choice: ").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice){
        console.log(`It's a Tie, ${humanChoice} vs ${computerChoice}`);
        return;
    }

    if (humanChoice === "rock" && computerChoice === "scissor"){
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore ++;
    } else if (humanChoice === "scissor" && computerChoice === "paper"){
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore ++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore ++;
    } else {
        console.log(`You lost, ${computerChoice} beats ${humanChoice}`);
        computerScore ++;
    }
}

function displayScore(){
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore){
        console.log("You win!!");
    } else if (humanScore === computerScore){
        console.log("It's a tie!!");
    } else {
        console.log("You Lose :(");
    }
}

function playGame(){
    let round = 0;
    while (round <5){

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    round ++;
    }
    displayScore();
}

playGame();
