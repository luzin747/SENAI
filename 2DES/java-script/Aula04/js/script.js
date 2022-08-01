// CORREÇÃO EXERCICIO 01 - VALIDADOR DE PLACA


var inpPlaca = document.querySelector("#inputPlaca")
var resultadoPlaca = document.querySelector("#result")

resultadoPlaca.disabled = true

resultadoPlaca.value = 'Aguardando Placa . . . .'

function ex1() {
    if (validarPlaca(inpPlaca.value)) {
        resultadoPlaca.style.color = 'green'
        resultadoPlaca.value = "Placa Válida"
    } else {
        resultadoPlaca.style.color = 'red'
        resultadoPlaca.value = "Placa Inválida"
    }
}



function validarPlaca(inpPlaca) {
    if (inpPlaca.length== 7) {
        let modeloAntigo = /^[a-zA-Z]{3}[0-9]{4}$/
        let modeloAntigoComIfem = /^[a-zA-Z]{3}[-][0-9]{4}$/
        let modeloNovo = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/

        if (modeloAntigo.test(inpPlaca) || modeloAntigoComIfem.test(inpPlaca) || modeloNovo.test(inpPlaca)) {
            return true
        } else {
            return false
        }
    }
    else {
        return false
    }
    

}
var cpf = document.querySelector("#inputCPF")
var resultCPF = document.querySelector("#result-cpf")

resultCPF.disabled = true

function ex2() {
    if (validarCPF(cpf.value)) {
        resultCPF.style.color = 'green'
        resultCPF.value = "CPF Válido"
    } else {
        resultCPF.style.color = 'red'
        resultCPF.value = "CPF Inválido"
    }
}


//CORREÇÃO EXERCICIO 02 - VALIDADOR DE CPF

    function validarCPF(cpf) {
        if(cpf.length != 11) return false

        if(cpf == "11111111111" ||
           cpf == "22222222222" ||
           cpf == "33333333333" ||
           cpf == "44444444444" ||
           cpf == "55555555555" ||
           cpf == "66666666666" ||
           cpf == "77777777777" ||
           cpf == "88888888888" ||
           cpf == "99999999999" ||
           cpf == "00000000000" 
        ) return false

        let d1 = 0, d2 = 0
        for(let i = 0; i <= 8; i++) {
            d1 += cpf[i] * (i+1);
            d2 += cpf[i] * i

        }

        d1 %= 11;
        if(d1 == 10) d1 = 0
        if(d1 != cpf[9]) return false

        d2 += d1 * 9
        d2 %= 11
        if(d2 == 10) d2 = 0
        if(d2 != cpf[10]) return false

        return true
    }



function geraCelular(ddd,qtd) {
    let numero = ddd

    for(let i = 0;i < qtd; i++) {
        for(let j = 0; j < 8; j++) {
           numero += Math.floor(Math.random() * 99999999-100000000+1) + 100000000
           
        }
    }
}

