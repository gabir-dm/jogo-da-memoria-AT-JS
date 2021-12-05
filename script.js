let cards = ['dog1.png', 'dog1.png', 'dog2.png', 'dog2.png', 'dog3.png', 'dog3.png', 'dog4.png', 'dog4.png', 'dog5.png', 'dog5.png', 'dog6.png', 'dog6.png', 'dog7.png', 'dog7.png', 'dog8.png', 'dog8.png']
let gameBoard = document.getElementById('tabuleiro')
let chronometer = document.getElementById('chrono')
let highscores = document.getElementById('scores')

let blockClicks = false
let score = 0
let turnedCards = []

let seconds = 0
let minutes = 0
let displaySeconds = 0
let displayMinutes = 0
let interval = null

function gameStart(){

    gameBoard.innerHTML = ``
    window.clearInterval(interval)
    score = 0

    cards.forEach(card => {
        gameBoard.innerHTML += 
            `<div class="gameCard" data-value="${card}">
                <img class="frontFace" src="img/${card}">
            </div>`
    })

    setTimeout(() => {
        shuffleCards()
        let reset = document.getElementById("startBtn")
        reset.innerText = "Reiniciar Jogo"
    }, 3000)
}

function shuffleCards(){

    cards.sort(()=> (Math.random() > .5) ? 1 : -1)

    gameBoard.innerHTML = ``
    cards.forEach((card, i) => {
        gameBoard.innerHTML += 
            `<div class="gameCard">
                <img class="frontFace" data-value="${card}" src="img/${card}">
            </div>`
    })

    gameIsGo()
}

function gameIsGo(){

    let initialCards = document.getElementsByClassName('frontFace')

    setTimeout(() => {
        for (let i = 0; i < initialCards.length; i++){
            let card = initialCards[i];
            card.classList.toggle('turned')
        }

        seconds = 0
        minutes = 0
        interval = window.setInterval(startChrono, 1000)
        startChrono()
    }, 1500)

    let gameCard = document.querySelectorAll(".gameCard img")
    
    gameCard.forEach((card, i) => {
        card.addEventListener("click", turnCard)
    })
}

function startChrono(){

    seconds++

    if(seconds /60 === 1){
        seconds = 0
        minutes++
    }
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString()
    } else {
        displaySeconds = seconds
    }
    if(minutes < 10){
        displayMinutes = "0" + minutes.toString()
    } else {
        displayMinutes = minutes
    }

    chronometer.innerHTML = displayMinutes + ":" + displaySeconds
}

function turnCard(card){

    if(blockClicks){
        return
    }

    card.target.classList.toggle('turned')
    card.target.classList.add('check')
    card.target.removeEventListener("click", turnCard)
    let turned = card.target.getAttribute('data-value')
    turnedCards.push(turned)

    if(turnedCards.length === 2){

        blockClicks = true

        if(turnedCards[0] === turnedCards[1]){
            score++
            blockClicks = false
            turnedCards = []

            if(score === 8){
                gameEnd()
            }

        } else {

            // ------------- Not working!!! ------------------
            // let checked = document.querySelectorAll(".check")
            // checked.forEach(card =>
            //     card.target.classList.toggle('turned'))
            }
            // blockClicks = false
    }

}


function gameEnd(){
    window.clearInterval(interval)
    highscores.innerHTML += `<li>${displayMinutes}:${displaySeconds}</li>`
}