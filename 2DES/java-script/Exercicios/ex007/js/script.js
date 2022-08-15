var user = fetch("https://jsonplaceholder.typicode.com/todos")
var cards = document.querySelector("#card")

user.then((response) => {
    return response.json()
})
.then((data) => {
    data.forEach(item => {

        let novoCard = cards.cloneNode(true)

        novoCard.classList.remove("modelo")

        novoCard.querySelector("#userId").innerHTML = item.userId
        novoCard.querySelector("#title").innerHTML = item.title

        let inpt = document.querySelector("#input")

        inpt.checked = item.completed

        inpt.disabled = true

        document.querySelector("#container").appendChild(novoCard)

    })
})


