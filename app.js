import { environments } from "./environment.js"




window.addEventListener('DOMContentLoaded', makeCards)

function makeCards(card) {
    const container = document.createElement('div')
    container.id = 'card'
    container.classList.add('card')

    const imgCard = document.createElement('img')
    imgCard.src = card.img
    imgCard.alt = card.description

    const titleCard = document.createElement('h2')
    titleCard.textContent = card.title

    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = card.description

    container.appendChild(imgCard)
    container.appendChild(titleCard)
    container.appendChild(descriptionCard)

    document.querySelector('main').appendChild(container)
}

function makeCards() {
    for (let index = 0; index < 12; index++) {
        makeCards(myCard);

    }
}


function makeCards() {
 environments.forEach(card => makeCards(card))    
}