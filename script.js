// 1. a pagina deve carregar com todas as cartas em pares desviradas
// 2. ao clicar no botao iniciar jogo, o contador se inicia, as cartas embaralham, aparecem desviradas por 3 segundos e depois viram
// 3. ao clicar em uma carta, ela deve desvirar e aguardar, caso uma segunda carta seja desvirada, deve-se testar a igualdade de ambas
// 4. se for par, permanecem desviradas, senão viram de novo após 1,5s
// 5. apos todas as cartas serem desviradas, o jogo termina
// 6. apos desvirar uma segunda carta, nao devera ser possivel virar uma terceira
// 7. ao termino do jogo, o contador para
// 8. devera haver um botao de mostrar tempos de jogo anteriores

let cards = ['dog1.png', 'dog1.png', 'dog2.png', 'dog2.png', 'dog3.png', 'dog3.png', 'dog4.png', 'dog4.png', 'dog5.png', 'dog5.png', 'dog6.png', 'dog6.png', 'dog7.png', 'dog7.png', 'dog8.png', 'dog8.png']
let gameBoard = document.getElementById('tabuleiro')

function gameStart(){
    // let initialTime = new Date()

    gameBoard.innerHTML = ``
    cards.forEach(card => {
        gameBoard.innerHTML += 
            `<div class="gameCard" data-value="${card}">
                <img class="frontFace" src="img/${card}">
                <img class="backFace turned" src="img/back.png">
            </div>`
    })

    setTimeout(() => {
        shuffleCards()}, 2000)
}

function shuffleCards(){
    cards.sort(()=> (Math.random() > .5) ? 1 : -1)

    gameBoard.innerHTML = ``
    cards.forEach(card => {
        gameBoard.innerHTML += 
            `<div class="gameCard" data-value="${card}">
                <img class="frontFace" src="img/${card}">
                <img class="backFace turned" src="img/back.png" onclick="turnCard()">
            </div>`
    })

    let initialFront = document.getElementsByClassName('frontFace')
    let initialBack = document.getElementsByClassName('backFace')
    let initialCards = [...initialFront, ...initialBack]

    setTimeout(() => {
        for (let i = 0; i < initialCards.length; i++){
            let card = initialCards[i];
            card.classList.toggle('turned')
        }
    }, 1500)
}

function turnCard(){
    
}
