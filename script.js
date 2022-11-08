const choices = ['rock', 'paper', 'scissors'];
const tieMessage = ("It's a tie.")
const winMessage = ('You WIn!!!')
const loseMessage = ('You Lose.')

let rounds = 0
let playerWin = 0;
let compWin = 0;
let tie = 0;

function getCompChoice() {
    let selection = choices[Math.floor(Math.random()*choices.length)];
    return selection
}

function playerChoice() {
    let input = prompt("Make a move. Type 'rock', 'paper', or 'scissors'.");
    input = input.toLowerCase();
    return input 
}

function rpsRound(humanHand, compHand) {
    console.log('Human Player: ', humanHand);
    console.log('Computer Player: ', compHand);
    if (humanHand === compHand) {
        rounds += 1
        tie += 1
        return (tieMessage);
    } else if ((humanHand==='rock' && compHand==='scissors') || 
                (humanHand==='paper' && compHand==='rock') || 
                (humanHand==='scissors' && compHand==='paper')) {
                    rounds += 1
                    playerWin += 1
                    return (winMessage);
                }
        else {
            rounds += 1
            compWin += 1
            return (loseMessage)}
    
}

function game(){
    while (rounds < 5){
        rpsRound(playerChoice(), getCompChoice());
    }
    console.log('Player Score:', playerWin)
    console.log('Computer Score:', compWin)
    console.log('Ties:', tie)
}

game()
