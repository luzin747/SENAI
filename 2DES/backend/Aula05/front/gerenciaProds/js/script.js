const linhamodelo = document.querySelector(".linhamodelo")
const modalExcluir = document.querySelector('.excluir')
const modalEditar = document.querySelector(".editar")

fetch()
.then(res => {return res.json()})
.then(produtos => {
    produtos.forEach(produto => {
        let linha = linhamodelo.cloneNode(true)
        linha.classList.remove("model")

        let colunas = linha.querySelectorAll("td")
        
    });
})