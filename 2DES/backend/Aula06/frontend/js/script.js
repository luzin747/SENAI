const uri = 'http://localhost:3000/patrimonio/itens/'
const corpo = document.querySelector(".corpo")
var itens = []

function carregar() {

    const options = {method: 'GET'};

    fetch(uri, options)
      .then(res => res.json())
      .then(res => {
            itens = res;
            preencherTela();
      }
        )
      .catch(err => console.error(err));
}


function preencherTela() {
    itens.forEach(e => {
        var novoCorpo = corpo.cloneNode(true)

        novoCorpo.classList.remove('model')

        novoCorpo.querySelector(".n1").innerHTML = e.ni
        novoCorpo.querySelector(".aquisicao").innerHTML = 'Aquisição: ' + e.aquisicao
        novoCorpo.querySelector(".demoninacao").innerHTML = 'Denominação: ' +e.denominacao
        novoCorpo.querySelector(".valor").innerHTML ='Valor: '+ e.valor
        novoCorpo.querySelector(".image").src = '../docs/assets/' + e.img
        novoCorpo.querySelector("#del").setAttribute('onclick',`del(${e.ni})`);


        document.querySelector(".container").appendChild(novoCorpo)

    })

}

const del = (ni) => {
    const options = {
        method: 'DELETE'
    }

    if(confirm("Confirma a exclusão do Item:" + ni)) {
        fetch(uri + ni , options)
            .then(res => res.status)
            .then(res => {
                if(res == 204);
                    window.location.reload()
            })
            .catch(err => console.error(err))

    }
}