
var uriClientes = `http://localhost:3000/duplicatas/clientes`;

// var clientes = fetch("http://localhost:3000/duplicatas/clientes")
var clientes = []

var cardClientes = document.querySelector("#cont-tabela")
var modal = document.querySelector(".modal")
var telFone = document.querySelector(".tell-phone")

function loadCli() {
    fetch(uriClientes)
        .then(res => { return res.json() })
        .then(data => {
            clientes = data;
            clienteCard()
        })
}

function clienteCard(e) {



    clientes.forEach(pessoa => {
        var novoCardClientes = cardClientes.cloneNode(true)

        novoCardClientes.classList.remove('model')

        novoCardClientes.querySelector('#cod_cli').innerHTML = pessoa.cod_cli
        novoCardClientes.querySelector('.nome').innerHTML = pessoa.nome
        novoCardClientes.querySelector('.endereco').innerHTML = pessoa.endereco
        novoCardClientes.querySelector('.bairro').innerHTML = pessoa.bairro
        novoCardClientes.querySelector('.cidade').innerHTML = pessoa.cidade
        novoCardClientes.querySelector('.estado').innerHTML = pessoa.uf

        document.querySelector('#cont-Cliente').appendChild(novoCardClientes)


    })
}

// clientes.then((response) => {
//     return response.json();
// })

//     .then((data) => {


//     })




function showModal(e) {

    modal.classList.toggle('sumir')
    document.querySelector('body').style.background = '#00000069';

    // console.log(clientes[2])

    clientes.forEach(item => {

        

        if (item.cod_cli == e.parentNode.querySelector(".details").querySelector("#cod_cli").innerHTML) {
            item.telefones.forEach(tel => {


                let telmodal = telFone.cloneNode(true)

                telmodal.classList.remove('tel-model')

                // telmodal.querySelector(".nomeCli").innerHTML = tel.nome
                telmodal.querySelector(".tipo").innerHTML = tel.tipo
                telmodal.querySelector(".numero").innerHTML = tel.numero


                document.querySelector(".modal").appendChild(telmodal)
            });
            

        }
        
    })
    







    // clientes[indice].telefones.forEach(tell => {

    //     var telmodal = telFone.cloneNode(true)

    //     telmodal.classList.remove('tel-model')

    //     telmodal.querySelector(".telefone").innerHTML = tell.telefone
    //     telmodal.querySelector(".celular").innerHTML = tell.tipo

    //     alert(tell.tipo)

    //     document.querySelector(".modal").appendChild(telmodal)




    // })



}

function fecharModal() {
    modal.classList.toggle('sumir')
    document.querySelector('body').style.background = '#fff';


}

