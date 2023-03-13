var urlSetor = 'http://localhost:3000/setor'
var urlProdutos = 'http://localhost:3000/produto'

var setores = []

var cardSetor = document.querySelector('.setores')

function carregar() {
    const options = { method: 'GET' };

    fetch(urlSetor, options)
        .then(res => res.json())
        .then(res => {
            setores = res;
            preencherSetores();
        }
        )
        .catch(err => console.error(err));


}

var quatidadeTotal = 0 

function preencherSetores() {
    var salarioTotal = 0 

    document.querySelector('.qtd-setores').innerHTML = setores.length

    setores.forEach(s => {

            var novoCardSetor = cardSetor.cloneNode(true)

            novoCardSetor.style.display = 'table-row'

            novoCardSetor.querySelector('.idSetor').innerHTML = s.id
            novoCardSetor.querySelector('.nome').innerHTML = s.nome
            novoCardSetor.querySelector('.comissao').innerHTML =  s.comissao + '%'

            // salarioTotal += v.salario

            // v.detalhes.forEach(vd => {

            //     quatidadeTotal = quatidadeTotal + vd.quantidade

            // })

            // novoCardSetor.querySelector('.quantidade').innerHTML = quatidadeTotal

            document.querySelector('.contSetores').appendChild(novoCardSetor)
        })

        // document.querySelector('.desativados').innerHTML = 'R$' + salarioTotal + ',00'

}

function Cadastrar() {
    var nome = document.querySelector('.nome_produto').value
    var valor = document.querySelector('.valor_produto').value

    var data = {
        "nome": nome,
        "comissao": Number(valor),
    }

    console.log(data);


    fetch(urlSetor, {
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
