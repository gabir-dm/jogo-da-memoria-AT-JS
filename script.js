let cards = ['dog1.png', 'dog1.png', 'dog2.png', 'dog2.png', 'dog3.png', 'dog3.png', 'dog4.png', 'dog4.png', 'dog5.png', 'dog5.png', 'dog6.png', 'dog6.png', 'dog7.png', 'dog7.png', 'dog8.png', 'dog8.png']
let gameBoard = document.getElementById('tabuleiro')

function gameStart(){
    // let initialTime = new Date()

    gameBoard.innerHTML = ``
    cards.forEach(card => {
        gameBoard.innerHTML += 
            `<div class="gameCard" data-value="${card}">
                <img class="frontFace" src="img/${card}">
            </div>`
    })

    setTimeout(() => {
        shuffleCards()}, 3000)
}

function shuffleCards(){

    cards.sort(()=> (Math.random() > .5) ? 1 : -1)

    gameBoard.innerHTML = ``
    cards.forEach((card, i) => {
        gameBoard.innerHTML += 
            `<div class="gameCard" data-value="${card}">
                <img class="frontFace" src="img/${card}">
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
    }, 1500)

    let gameCard = document.querySelectorAll(".gameCard img")
    
    gameCard.forEach((card, i) => {
        card.addEventListener("click", turnCard =>
        card.classList.toggle('turned')
        )
    })
}
