

var email = document.querySelector("#email")
var psw = document.querySelector("#psw")

function login() {
    let achou = false

    // console.log(email.value)
    // console.log(senha.value)
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( res => { return res.json() })
    .then(usuarios => {
        
        usuarios.forEach(usuario => {
            if((email.value == usuario.email) && (psw.value == usuario.username)) {
                achou = true

                let infoUser = {
                    "id": usuario.id,
                    "nome": usuario.name,
                }

                window.localStorage.setItem("infoUser", JSON.stringify(infoUser))

                window.location.href = "../home/home.html"
         }
        })
        if(achou == false) alert("Usuario ou Senha Inválidos")
    })

}