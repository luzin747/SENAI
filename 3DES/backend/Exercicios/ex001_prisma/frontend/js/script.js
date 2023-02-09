var urlVendas = 'http://localhost:3000/vendas'
var urlProdutos = 'http://localhost:3000/produto'

var vendas = []
var detalhesVendas = []
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

function preencherVendas() {
    var quatidadeTotal = 0 

    document.querySelector('.qtd-vendas').innerHTML = vendas.length

        vendas.forEach(v => {

            var novoCardSetor = cardVendas.cloneNode(true)

            novoCardSetor.style.display = 'table-row'

            novoCardSetor.querySelector('.idVenda').innerHTML = v.id_venda
            novoCardSetor.querySelector('.data').innerHTML = v.data
            novoCardSetor.querySelector('.idVendedor').innerHTML = v.vendedor_id

            quatidadeTotal = 0 

            v.detalhes.forEach(vd => {

                quatidadeTotal = quatidadeTotal + vd.quantidade

            })

            novoCardSetor.querySelector('.quantidade').innerHTML = quatidadeTotal

            document.querySelector('.contVendas').appendChild(novoCardSetor)
        })

}

function preencherProdutos() {

    produtos.forEach(p => {

        var novoCardProdutos = cardProdutos.cloneNode(true)

        novoCardProdutos.style.display = 'flex'

        novoCardProdutos.querySelector('.nome_produto').innerHTML = p.nome
        novoCardProdutos.querySelector('.numero_produto').innerHTML = p.valor

        if (p.setor_produto == 1) { novoCardProdutos.querySelector('.image_icon_setor').src = 'https://cdn-icons-png.flaticon.com/512/3132/3132707.png' }

        document.querySelector('.cont_produtos').appendChild(novoCardProdutos)
    })

}
