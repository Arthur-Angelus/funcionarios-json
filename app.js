'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}

const container = document.getElementById('container')

function criarCard(funcionarios) {

    
    const card = document.createElement('div')
    const imagem = document.createElement('img')
    const cargo = document.createElement('span')
    const nome = document.createElement('p')

    card.className = 'card'
    imagem.className = 'imagem'
    cargo.className = 'cargo'
    nome.className = 'nome'

    imagem.src = './img/' + funcionarios.imagem
    nome.textContent = funcionarios.nome
    cargo.textContent = funcionarios.cargo

    card.appendChild(imagem)
    card.appendChild(nome)
    card.appendChild(cargo)

    container.appendChild(card)
}

function carregarCard() {
    funcionarios.forEach(criarCard)
}

carregarCard()