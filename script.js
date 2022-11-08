const choices = ['rock', 'paper', 'scissors'];

function getCompChoice() {
    let selection = choices[Math.floor(Math.random()*choices.length)];
    return selection
}

function playerChoice() {
    let input = prompt("Make a move. Type 'rock', 'paper', or 'scissors'.");
    input = input.toLowerCase();
    return input 
}



