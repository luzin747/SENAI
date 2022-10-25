var url = new URL(window.location.href)
var params = new URLSearchParams(url.search)



var listaComentarios = document.querySelector("#comentarios")
var itemComentario = document.querySelector("#comentario")

fetch("")
.then(res => {return res.json() })
.then(comentarios => {
    comentarios.forEach(comentario => {
        let novoComentario = itemComentario.cloneNode(true)

        novoComentario.querySelector("#email").innerHTML = comentario.email
        novoComentario.querySelector("#body").innerHTML= comentario.body

        listaComentarios.appendChild(novoComentario)
    })
})
