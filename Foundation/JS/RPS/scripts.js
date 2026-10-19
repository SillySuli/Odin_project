"use strict"

let humanScore = 0;
let computerScore = 0;

const divElement = document.querySelector("div");
const pElement = document.createElement("p");
pElement.textContent = "Choose your hand";
divElement.appendChild(pElement);

const scoreDisplay = document.createElement("div");
divElement.appendChild(scoreDisplay);

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
        pElement.textContent = `It's a Tie, ${humanChoice} vs ${computerChoice}`;
        return;
    }

    if (humanChoice === "rock" && computerChoice === "scissor"){
        pElement.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
        humanScore ++;
    } else if (humanChoice === "scissor" && computerChoice === "paper"){
        pElement.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
        humanScore ++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        pElement.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
        humanScore ++;
    } else {
        pElement.textContent = `You lost, ${computerChoice} beats ${humanChoice}`;
        computerScore ++;
    }
}

function displayScore(){
    scoreDisplay.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore >= 5){
        scoreDisplay.textContent = "You win!!";
        Object.freeze(scoreDisplay);
    } else if (computerScore >= 5) {
        scoreDisplay.textContent = "You Lose :(";
        Object.freeze(scoreDisplay);
    }
}

/*
function playGame(){
    let round = 0;
    while (round < 1){

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    round ++;
    }
    displayScore();
}
*/

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

rockBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    displayScore();
});

paperBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
    displayScore();
});

scissorBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("scissor", computerSelection);
    displayScore();
});
