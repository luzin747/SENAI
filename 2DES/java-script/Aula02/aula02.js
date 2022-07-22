// //tagname, id,class
// var texto = document.getElementsByTagName("h1");

// console.log(texto)

// var titulo = document.getElementById("titulo");

// var aluno = {
//     nome:"Fulana",
//     matricula: 56734,

// }

// titulo.innerHTML = `Nome: ${aluno.nome} </br> Matricula: ${aluno.matricula}`

// titulo.style.color = "green";
// //titulo.style.margin = "200px"

// var menssagem = document.getElementById("menssagem")

// menssagem.style.display = "block"

// var divisao = document.getElementsByClassName("divisao")

// console.log(divisao)

// //document.querySelector()
// //document.querySelectorAll()

// var titulo2 = document.querySelector("#titulo")
// var div = document.querySelectorAll(".divisao")
// var msg = document.querySelectorAll("h1")

// console.log(msg)

var busca = document.querySelector("#busca")

var linhas = document.querySelectorAll("tr")

var btBusca = document.querySelector("button")

busca.addEventListener("keyup", buscarNome)

btBusca.addEventListener("click", buscarNome)

function buscarNome() {

    console.log(busca.value)
    var localizar = false

    linhas.forEach((linha) => {

        let temp = linha.querySelector("td")
        if (temp != null) {
            // if (temp.innerHTML.toLowerCase() == busca.value.toLowerCase()) {
            //     alert("Encontrei")
            //     localizar = true
            //     temp.style.fontWeigth = "bold"
            //     linha.style.color = "red"
            // }
            if(temp.innerHTML.toLowerCase().includes(busca.value.toLowerCase())) {
                linha.style.display = "table-row"
                
            }else{
                linha.style.display = "none"
            }
        }
    })

    //if (!localizar) alert("Não Encontrei")




}

// let v1 = 1
// let v2 = "1"

// if(v1 == v2) {
//     console.log("SOMOS IGUAIS")
// } 

