var urlProdutos = 'http://localhost:3000/produto'

var produtos = []

var cardProduto = document.querySelector('.produtos')

function carregar() {
    const options = { method: 'GET' };

    fetch(urlProdutos, options)
        .then(res => res.json())
        .then(res => {
            produtos = res;
            preencherProdutos();
        }
        )
        .catch(err => console.error(err));

}

var quatidadeTotal = 0

function preencherProdutos() {
    var salarioTotal = 0

    document.querySelector('.qtd-produto').innerHTML = produtos.length

    produtos.forEach(p => {


        var novoCardProduto = cardProduto.cloneNode(true)

        novoCardProduto.style.display = 'table-row'

        novoCardProduto.querySelector('.idProduto').innerHTML = p.id_produto
        novoCardProduto.querySelector('.nome').innerHTML = p.nome
        novoCardProduto.querySelector('.valor').innerHTML = 'R$' + p.valor
        novoCardProduto.querySelector('.setorProduto').innerHTML = p.setor_produto

        // salarioTotal += v.salario

        // v.detalhes.forEach(vd => {

        //     quatidadeTotal = quatidadeTotal + vd.quantidade

        // })

        // novoCardProduto.querySelector('.quantidade').innerHTML = quatidadeTotal

        document.querySelector('.contProdutos').appendChild(novoCardProduto)
    })

    // document.querySelector('.desativados').innerHTML = 'R$' + salarioTotal + ',00'

}

function Cadastrar() {
    var nome = document.querySelector('.nome_produto').value
    var valor = document.querySelector('.valor_produto').value
    var setor = document.querySelector('.setor_produto').value

    var data = {
        "nome": nome,
        "valor": Number(valor),
        "setor_produto": Number(setor),
    }

    console.log(data);


    fetch(urlProdutos, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })

        .then(res => { 
            console.log(res.status)
            //return res.json() 
            
            if(res.status == 200) {
                alert('Cadastrado')
                esconderModalCheck();
            }

            if(res == err) {
                
            }
        })
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
