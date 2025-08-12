'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}

function criarImagem(funcionarios) {

    const container = document.createElement('container')
    const card = document.createElement('card')
    const imagem = document.createElement('img')
    const cargo = document.createElement('span')
    const nome = document.createElement('p')

    card.className = 'card'

    imagem.src = './img/' + funcionarios.imagem
    
    nome.src = funcionarios.nome
    
    cargo.src = funcionarios.cargo

    card.appendChild(imagem)

    container.appendChild(card)
}

function carregarImagem() {
    console.log(funcionarios)
    funcionarios.forEach(criarImagem)
}

carregarImagem()