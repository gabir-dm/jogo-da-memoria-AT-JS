// 1. a pagina deve carregar com todas as cartas em pares desviradas
// 2. ao clicar no botao iniciar jogo, o contador se inicia, as cartas embaralham, aparecem desviradas por 3 segundos e depois viram
// 3. ao clicar em uma carta, ela deve desvirar e aguardar, caso uma segunda carta seja desvirada, deve-se testar a igualdade de ambas
// 4. se for par, permanecem desviradas, senão viram de novo após 1,5s
// 5. apos todas as cartas serem desviradas, o jogo termina
// 6. apos desvirar uma segunda carta, nao devera ser possivel virar uma terceira
// 7. ao termino do jogo, o contador para
// 8. devera haver um botao de mostrar tempos de jogo anteriores

let cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]

function gameStart(){
    let initialTime = new Date()

cards.forEach (image => {
    cardsHtml =+ `
    <div class = "gameCard" data-value = "${image}">
        <img class = "frontFace" src = "img/${image}">
    </div>
    `
})

}