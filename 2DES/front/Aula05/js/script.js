<<<<<<< HEAD
function criarElemento() {
    let itemLista = document.createElement("div")
    itemLista.className = "item-lista"

    let thumbnaill = document.createElement("img")
    thumbnaill.src = "./img/fundo-boteco.jpg"
    thumbnaill.id = "thumb"
    thumbnaill.alt = "Foto do Boteco"

    let like = document.createElement("img")
    like.src = "./img/heart-cheio.png"
    like.id = "like"
    like.alt = "Icone de Coraçãozin"

    let avaliacao = document.createElement("img")
    avaliacao.src = "./img/estrela.png"
    avaliacao.id = "avaliacao"
    avaliacao.alt = "Avaliação"

    let info = document.createElement("div")
    info.id = "info"

    let nomeRestaurante = document.createElement("p")
    nomeRestaurante.innerHTML = "Xurumelas Bar 2.0 Muito"

    let textoAvaliacao = document.createElement("p")

    textoAvaliacao.appendChild(avaliacao)
    textoAvaliacao.append("4.9")

    info.appendChild(nomeRestaurante)
    info.appendChild(textoAvaliacao)

    itemLista.appendChild(thumbnaill)
    itemLista.appendChild(info)
    itemLista.appendChild(like)

    document.querySelector(".lista").appendChild(itemLista)

=======
function criarElemento() {
    let itemLista = document.createElement("div")
    itemLista.className = "item-lista"

    let thumbnaill = document.createElement("img")
    thumbnaill.src = "./img/fundo-boteco.jpg"
    thumbnaill.id = "thumb"
    thumbnaill.alt = "Foto do Boteco"

    let like = document.createElement("img")
    like.src = "./img/heart-cheio.png"
    like.id = "like"
    like.alt = "Icone de Coraçãozin"

    let avaliacao = document.createElement("img")
    avaliacao.src = "./img/estrela.png"
    avaliacao.id = "avaliacao"
    avaliacao.alt = "Avaliação"

    let info = document.createElement("div")
    info.id = "info"

    let nomeRestaurante = document.createElement("p")
    nomeRestaurante.innerHTML = "Xurumelas Bar 2.0 Muito"

    let textoAvaliacao = document.createElement("p")


    textoAvaliacao.appendChild(avaliacao)
    textoAvaliacao.append("4.9")

    info.appendChild(nomeRestaurante)
    info.appendChild(textoAvaliacao)

    itemLista.appendChild(thumbnaill)
    itemLista.appendChild(info)
    itemLista.appendChild(like)

    document.querySelector(".lista").appendChild(itemLista)

>>>>>>> 90a5c57af6dbc4f6046c4b034361979ba6ff1217
}