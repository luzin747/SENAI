var usuarios = [
    {
        "nome":"Fulano da Silva",
        "img":"Fulano",
        "login":"fulano",
        "senha":"12345" 
    },
    {
        "nome":"Fulano da Silva",
        "img":"Fulano",
        "login":"ciclano",
        "senha":"12345" 
    },
    {
        "nome":"Fulano da Silva",
        "img":"Fulano",
        "login":"beltrano",
        "senha":"12345" 
    },
]


function salvar() {
    let infoUser = [
        {
            "id": 1,
            "produto": "teste"
        },
        {
            "id": 2,
            "produto": "teste 2"
        }
    ]

    let infoTexto = JSON.stringify(infoUser)

    window.localStorage.setItem("userData", infoTexto)
}

function carregar() {
    let info = window.localStorage.getItem("userData")
    let objUser = JSON.parse(info)

    console.log(objUser)
}

function apagar() {
    // window.localStorage.removeItem("userData")
    // window.localStorage.clear()

    let info = window.localStorage.getItem("userData")
    let objUser = JSON.parse(info)

    objUser.pop()

    window.localStorage.setItem("userData", JSON.stringify(objUser))

}

function login() {

    let usuario = "fulano"
    let senha = "122345"

    usuarios.forEach(user => {
        if (user.login == usuario && user.senha == senha) {
            console.log(user)
            window.localStorage.setItem("userData", JSON.stringify(user))
        }
    })
}