var users = [

    {
      "usuario": "admin",
      "senha": "admin"  
    },
    {
      "usuario": "luiz",
      "senha": "luizlindo"  
    },{
      "usuario": "senai",
      "senha": "dev"  
    }

]

var achou = false

function logar(e) {

  users.forEach(item => {
    var user = document.querySelector("#email").value
    var senha = document.querySelector("#senha").value

    if(user == item.usuario && senha == item.senha) {
      window.location.href = "./page/home.html"
      console.log(window.location.href)
      achou = true
    }
  }) 

  if(achou == false) {
    alert('Credenciais erradas')
  }
}



var opcoes = [

    {
        "img": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "nome": "Nike Shoes Red",
        "preco": "169,00"
    },

    {
        "img": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "nome": "Nike blue sky",
        "preco": "159,00"
    },

    {
        "img": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        "nome": "Nike green",
        "preco": "199,00"
    },

]

var cards = document.querySelectorAl(".card-item")

function carregar() {
    opcoes.forEach(item => {
        let novoCard = cards.cloneNode(true) 

        novoCard.classList.remove("modelo")

        novoCard.querySelector("#imagem-item").src = item.img
        novoCard.querySelector("#name-product").innerHTML = item.nome
        novoCard.querySelector("#price-product").innerHTML = item.preco

        document.querySelector(".card").appendChild(novoCard)
    })
}