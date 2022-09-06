const listaFuncionario = document.querySelector("#lista-funcionarios")
const linhamodelo = document.querySelector(".linhamodelo");
const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");

const inputMatricula = document.querySelector("#matricula");
const inputNome = document.querySelector("#nome");
const inputCargo = document.querySelector("#cargo");
const inputSalario = document.querySelector("#salario");
const inputCPF = document.querySelector("#cpf");

const btCadedit = document.querySelector("#cadedit");

fetch("http://localhost:3000/funcionario")
.then(res => { return res.json() })
.then(funcionario => {
    funcionario.forEach(funcionario => {
        let linha = linhamodelo.cloneNode(true);
        linha.classList.remove("model");

        let colunas = linha.querySelectorAll("td");
        colunas[0].innerHTML = funcionario.matricula;
        colunas[1].innerHTML = funcionario.nome;
        colunas[2].innerHTML = funcionario.cargo;
        colunas[3].innerHTML = "R$ " + funcionario.salario;
        colunas[4].innerHTML = funcionario.cpf;


        linha.querySelector("#exclui").addEventListener("click", () => {
            modalExcluir.classList.remove("model");
            modalExcluir.querySelector("#cod").innerHTML = funcionario.cod;
        })

        linha.querySelector("#edita").addEventListener("click", () => {
            modalEditar.classList.remove("model"); 
            btCadedit.innerHTML = "Editar";
            btCadedit.onclick = () => { editarProduto() }
            inputMatricula.value = funcionario.cod;
            inputNome.value = funcionario.nome;
            inputCargo.value = funcionario.cargo;
            inputSalario.value = funcionario.salario;
            inputCPF.value = funcionario.cpf;
        })

        listaProdutos.appendChild(linha);
    });
});



function fecharModalExcluir() {
    modalExcluir.classList.add("model");
}

function fecharModalEditar() {
    modalEditar.classList.add("model");
}

function abrirModalCadastro() {
    btCadedit.innerHTML = "Cadastrar";
    btCadedit.onclick = () => { cadastrarProduto(); }
    inputCodigo.value = "";
    inputNome.value = "";
    inputQuantidade.value = "";
    inputValor.value = "";
    modalEditar.classList.remove("model");
}

function editarProduto() {
    let produto = {
        "cod":inputCodigo.value,
        "nome":inputNome.value,
        "qntd":inputQuantidade.value,
        "preco":inputValor.value,
    }

    fetch("http://localhost:3000/produto", {
        "method":"PUT",
        "headers": {
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(produto)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.cod !== undefined) {
            alert("Produto Alterado com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao salvar alterações !");
        }
    })
}

function excluirProduto() {
    let data = {
        "cod":document.querySelector("#cod").innerHTML
    }

    fetch("http://localhost:3000/produto", {
        "method":"DELETE",
        "headers":{
            "Content-Type": "application/json"
        },
        "body":JSON.stringify(data)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.cod !== undefined) {
            alert("Produto Excluido Com Sucesso!");
            window.location.reload();
        }else {
            alert("Falha ao excluir produto !");
        }
    });
}

function cadastrarFuncionario() {
    let func = {
        "matricula": inputMatricula.value,
        "nome": inputNome.value,
        "cargo": inputCargo.value,
        "salario": inputSalario.value,
        "cpf": inputCPF.value
    };

    fetch("http://localhost:3000/produtos", {
        "method":"POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(func)
    })
    .then(res => {return res.json()})
    .then(resp => {
        if(resp.matricula !== undefined){
            alert("Produto Cadastrado Com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao cadastrar produto");
        }
     })
}
