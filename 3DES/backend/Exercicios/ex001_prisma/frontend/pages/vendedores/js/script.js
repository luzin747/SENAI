var urlVendedor = 'http://localhost:3000/vendedor'
var urlProdutos = 'http://localhost:3000/produto'

var vendedores = []

var cardVendedor = document.querySelector('.vendedores')

function carregar() {
    const options = { method: 'GET' };

    fetch(urlVendedor, options)
        .then(res => res.json())
        .then(res => {
            vendedores = res;
            preencherVendedores();
        }
        )
        .catch(err => console.error(err));


}

var quatidadeTotal = 0 

function preencherVendedores() {
    var salarioTotal = 0 

    document.querySelector('.qtd-vendedores').innerHTML = vendedores.length

    vendedores.forEach(v => {

            var novoCardSetor = cardVendedor.cloneNode(true)

            novoCardSetor.style.display = 'table-row'

            novoCardSetor.querySelector('.idVendedor').innerHTML = v.id_vendedor
            novoCardSetor.querySelector('.nome').innerHTML = v.nome
            novoCardSetor.querySelector('.salario').innerHTML = 'R$' + v.salario + ',00'
            novoCardSetor.querySelector('.setor_vendedor').innerHTML = v.setor_vendedor

            salarioTotal += v.salario

            // v.detalhes.forEach(vd => {

            //     quatidadeTotal = quatidadeTotal + vd.quantidade

            // })

            // novoCardSetor.querySelector('.quantidade').innerHTML = quatidadeTotal

            document.querySelector('.contVendedores').appendChild(novoCardSetor)
        })

        document.querySelector('.desativados').innerHTML = 'R$' + salarioTotal + ',00'

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
    var nome = document.querySelector('.nome_produto').value
    var salario = document.querySelector('.salario_vendedor').value
    var setor = document.querySelector('.setor_produto').value

    var data = {
        "nome": nome,
        "salario": Number(salario),
        "setor_vendedor": Number(setor),
    }

    console.log(data);


    fetch(urlVendedor, {
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
