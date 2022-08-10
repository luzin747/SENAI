var users = [

    {
      "usuario": "admin",
      "senha": "admin"  
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

