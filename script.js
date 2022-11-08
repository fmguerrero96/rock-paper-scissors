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

function rpsRound(humanHand, compHand) {
    const tieMessage = ("It's a tie.")
    const winMessage = ('You WIn!!!')
    const loseMessage = ('You Lose.')
    console.log('Human Player: ', humanHand);
    console.log('Computer Player: ', compHand);
    if (humanHand === compHand) {
        return (tieMessage);
    } else if ((humanHand==='rock' && compHand==='scissors') || 
                (humanHand==='paper' && compHand==='rock') || 
                (humanHand==='scissors' && compHand==='paper')) {
                    return (winMessage);
                }
        else {return (loseMessage)}
}





