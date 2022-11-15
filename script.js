const choices = ['Rock', 'Paper', 'Scissors'];
const tieMessage = ("It's a tie.");
const winMessage = ('You WIn!!!');
const loseMessage = ('You Lose.');

let playerWin = 0;
let compWin = 0;

function getCompChoice() {
    let selection = choices[Math.floor(Math.random()*choices.length)];
    return selection
}


function rpsRound(humanHand, compHand) {
    console.log('Human Player: ', humanHand);
    console.log('Computer Player: ', compHand);
    if (humanHand === compHand) {
        rounds += 1
        tie += 1
        return (console.log(tieMessage));
    } else if ((humanHand==='rock' && compHand==='scissors') || 
                (humanHand==='paper' && compHand==='rock') || 
                (humanHand==='scissors' && compHand==='paper')) {
                    rounds += 1
                    playerWin += 1
                    return (console.log(winMessage));
                }
        else {
            rounds += 1
            compWin += 1
            return (console.log(loseMessage))}
    
}

