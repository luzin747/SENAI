var opcoes = [

    {
        "img": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "nome": "Nike Shoes Red",
        "preco": "169,00",
        "backColor": '#CB001B'
    },

    {
        "img": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "nome": "Nike blue sky",
        "preco": "159,00",
        "backColor": '#008CFF'
        
    },

    {
        "img": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        "nome": "Nike green",
        "preco": "199,00",
        "backColor": '#B3E140'
    },

    {
        "img": "https://wallpaper.dog/large/1001830.jpg",
        "nome": "Nike green",
        "preco": "199,00",
        "backColor": '#191816'
    },


    {
        "img": "https://wallpaper.dog/large/10890189.png",
        "nome": "Nike Black",
        "preco": "189,00",
        "backColor": '#000000'
    },

    {
        "img": "https://wallpaper.dog/large/17173259.jpg",
        "nome": "Nike selva",
        "preco": "259,00",
        "backColor": '#326B42'
    },


]

var cards = document.querySelector(".card-item")

function carregar() {
    opcoes.forEach(item => {
        let novoCard = cards.cloneNode(true) 

        novoCard.classList.remove("modelo")

        novoCard.querySelector("#imagem-item").src = item.img
        novoCard.querySelector("#name-product").innerHTML = item.nome
        novoCard.querySelector("#price-product").innerHTML = 'R$' + item.preco
        novoCard.querySelector("#card").style.background = item.backColor


        document.querySelector("#items").appendChild(novoCard)
    })
}