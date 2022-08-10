


function inserirCadastro() {

    let inpFunc = document.querySelector("#inpFunc")
    let inpCargo = document.querySelector("#inpCargo")
    let inpsalario = document.querySelector("#inpSalario")

    let nome = inpFunc.value
    let cargo = inpCargo.value
    let salario = inpsalario.value
    
    let tabela = document.createElement("table")
    tabela.id = "table"

    let rows = document.createElement("tr")
    rows.id = "rows"

    let nomeFunc = document.createElement("td")
    nomeFunc.innerHTML = nome

    let cargoFunc = document.createElement("td")
    cargoFunc.innerHTML = cargo

    let salFunc = document.createElement("td")
    salFunc.innerHTML = 'R$' + salario + ',00'

    rows.appendChild(nomeFunc)
    rows.appendChild(cargoFunc)
    rows.appendChild(salFunc)

    tabela.appendChild(rows)

    // rows.appendChild(cargo)
    // rows.appendChild(salario)

    document.querySelector("#table").appendChild(tabela)



}