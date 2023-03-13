var urlVendas = 'http://localhost:3000/vendas'
var urlDetalhes = 'http://localhost:3000/detalhes'
var urlProdutos = 'http://localhost:3000/produto'
var urlVendedores = 'http://localhost:3000/vendedor'

var vendas = []
var detalhesVendas = []
var vendedores = []
var produtos = []

var cardVendas = document.querySelector('.vendas')
var cardProdutos = document.querySelector('.produtos')

function carregar() {
    const options = { method: 'GET' };

    fetch(urlVendas, options)
        .then(res => res.json())
        .then(res => {
            vendas = res;
            preencherVendas();
        }
        )
        .catch(err => console.error(err));

    fetch(urlProdutos, options)
        .then(res => res.json())
        .then(res => {
            produtos = res;
            preencherVendas();
        }
        )
        .catch(err => console.error(err));

    fetch(urlVendedores, options)
        .then(res => res.json())
        .then(res => {
            vendedores = res;
            preencherVendas();
        }
        )
        .catch(err => console.error(err));

    // fetch(urlProdutos, options)
    // .then(res => res.json())
    // .then(res => {
    //     produtos = res;
    //     preencherProdutos();
    // }
    // )
    // .catch(err => console.error(err));

}

var quatidadeTotal = 0
var soma = 0

function preencherVendas() {
    var quatidadeTotal = 0

    document.querySelector('.qtd-vendas').innerHTML = vendas.length

    soma += 1

    if (soma == 3) {

        console.log(soma, 'entrando')

        vendas.forEach(v => {

            var novoCardSetor = cardVendas.cloneNode(true)

            novoCardSetor.style.display = 'table-row'

            novoCardSetor.querySelector('.idVenda').innerHTML = v.id_venda
            novoCardSetor.querySelector('.data').innerHTML = v.data
            novoCardSetor.querySelector('.idVendedor').innerHTML = v.vendedor_id

            quatidadeTotal = 0

            vendedores.forEach(ve => {

                if (v.vendedor_id == ve.id_vendedor) {
                    novoCardSetor.querySelector('.idVendedor').innerHTML = ve.nome

                }

            })

            v.detalhes.forEach(vd => {

                quatidadeTotal = quatidadeTotal + vd.quantidade


                produtos.forEach(p => {

                    console.log(p.id_produto, vd.id_produto)

                    if (vd.id_produto == p.id_produto) {
                        novoCardSetor.querySelector('.produto').innerHTML = p.nome

                    }

                })

            })

            // 

            // })


            novoCardSetor.querySelector('.quantidade').innerHTML = quatidadeTotal

            document.querySelector('.contVendas').appendChild(novoCardSetor)
        })
    }

}

// function preencherProdutos() {

//     produtos.forEach(p => {

//         var novoCardProdutos = cardProdutos.cloneNode(true)

//         novoCardProdutos.style.display = 'flex'

//         novoCardProdutos.querySelector('.nome_produto').innerHTML = p.nome
//         novoCardProdutos.querySelector('.numero_produto').innerHTML = p.valor

//         if (p.setor_produto == 1) { novoCardProdutos.querySelector('.image_icon_setor').src = 'https://cdn-icons-png.flaticon.com/512/3132/3132707.png' }

//         document.querySelector('.cont_produtos').appendChild(novoCardProdutos)
//     })

// }


function Cadastrar() {
    var data = document.querySelector('.data_venda').value
    var vendedor_id = document.querySelector('.vendedor_id').value

    var data = {
        "data": data,
        "vendedor_id": Number(vendedor_id),
    }

    console.log(data);


    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    fetch('http://localhost:3000/vendas', options)
        .then(response => response.json())
        .then(response => CadastrarDetalhesVenda(response))

        .catch(err => console.error(err));
}

function CadastrarDetalhesVenda(teste) {
    console.log(teste.id_venda)

    var id_produto = document.querySelector('.id_produto').value
    var quantidade = document.querySelector('.qtd').value

    var data = {
        "id_venda": teste.id_venda,
        "id_produto": Number(id_produto),
        "quantidade": Number(quantidade),
    }

    console.log(data)

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    fetch('http://localhost:3000/vendas/detalhes', options)
        .then(response => response.json())
        .then(response => esconderModalCheck())
        .catch(err => console.error(err));

}

function MostrarModalCadastrar() {
    var modalCerto = document.querySelector('.modal_cadastrar')

    modalCerto.classList.remove('model')
}

function esconderModalCheck() {
    var modalCerto = document.querySelector('.modal_cadastrar')

    modalCerto.classList.add('model')

    window.location.reload();
}
