//variables for game 

let scorePlayer1 = 0
let scorePlayer2 = 0
let rollTurnPlayer1;
let rollTurnPlayer2; 

//giving index a random number between 1 or 2 because we need the game to be fair!!!
let index =  Math.floor(Math.random() * 2 ) +1
let randomDice;

//store the references to the DOM nodes
let playerTurnTitle = document.querySelector('#player-turn')
let scoreboardPlayer1 = document.querySelector('#score-player1')
let scoreboardPlayer2 = document.querySelector('#score-player2')
let resultBoxPlayer1 = document.querySelector('#result-player1')
let resultBoxPlayer2 = document.querySelector('#result-player2')
const btnRoll = document.querySelector('#btn-roll')
const btnReset = document.querySelector('#reset-game')




function checkPlayerTurn() {
    index++
    if ( index % 2 === 0) { //turn for player 1 will be when index is an even nr
        rollTurnPlayer1 = true
        rollTurnPlayer2 = false
        resultBoxPlayer1.classList.add('active')
        resultBoxPlayer2.classList.remove('active')
        playerTurnTitle.textContent = 'Player 1 Turn'
        
    } else { //turn for player 2 will be when index is an odd nr
        rollTurnPlayer1 = false
        rollTurnPlayer2 = true
        resultBoxPlayer1.classList.remove('active')
        resultBoxPlayer2.classList.add('active')
        playerTurnTitle.textContent = 'Player 2 Turn'
    }
}




//role dice
btnRoll.addEventListener('click', () => {
    btnReset.style.display = 'block'
    randomDice = Math.floor(Math.random() * 6) + 1
    
    if ( rollTurnPlayer1 === true ) {
        resultBoxPlayer1.textContent = randomDice
        scorePlayer1 += randomDice
        scoreboardPlayer1.textContent = scorePlayer1
    } else {
        resultBoxPlayer2.textContent = randomDice
        scorePlayer2 += randomDice
        scoreboardPlayer2.textContent = scorePlayer2
    }
    checkPlayerTurn()

    if ( scorePlayer1 >= 20) {
        playerTurnTitle.textContent = 'Player 1 HAS WON 🎉'
        btnRoll.style.display = 'none'
    } else if ( scorePlayer2 >= 20) {
        playerTurnTitle.textContent = 'Player 2 HAS WON 🎉'
        btnRoll.style.display = 'none'
    } 
})


//reset game
btnReset.addEventListener('click', () => {
    btnRoll.style.display = 'block'
    index = Math.floor(Math.random() * 2 ) +1
    btnReset.style.display = 'none'
    checkPlayerTurn()
    scorePlayer1 = 0
    scorePlayer2 = 0
    scoreboardPlayer1.textContent = 0
    scoreboardPlayer2.textContent = 0
    resultBoxPlayer1.textContent = '-'
    resultBoxPlayer2.textContent = '-'
})


checkPlayerTurn()
