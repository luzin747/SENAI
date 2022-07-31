
//_________________ EXERCICIO 01 _______________ //
//Crie uma função que valide se um valor passado como parâmetro é uma placa de 
//automóvel ex: validarPlaca(placa) a função deve retornar um valor boolean, “true” se for uma 
//placa válida e “false” se não for válida.
//OBS: dev validar tanto as placas antigas ex: ABC1212 como as novas ABC1B1

var buscaPlaca = document.querySelector("#inputPlaca")
var button = document.querySelector("#button")
var resultado = document.querySelector("#result")
//buscaPlaca.addEventListener("keyup", validarPlaca);
button.addEventListener("click", validarPlaca)

resultado.disabled = true
resultado.value = 'Aguardando Placa. . . . .'
function validarPlaca() {
    
    resposta = false
    
    console.log(buscaPlaca);

    const placaAntigaComIfem = /^[a-zA-Z]{3}[0-9]{4}$/
    const placaAntiga = /^[a-zA-Z]{3}[-][0-9]{4}$/
    const placaNova = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/

    if (placaAntiga.test(buscaPlaca.value)) {
        resposta = true
    } else if (placaNova.test(buscaPlaca.value)) {
        resposta = true
    
    }else if (placaAntigaComIfem.test(buscaPlaca.value)) {
        resposta = true
    }

    if (resposta == true) {
        resposta = 'Placa Válida'
        resultado.style.color = 'green'
    }
    if (resposta == false) {
        resposta = 'Placa Inválida'
        resultado.style.color = 'red'

    }
    

    resultado.value = resposta

}

//_________________ EXERCICIO 02 _______________ //
// Crie uma função para validar se um CPF é válido, busque na internet quais são as regras
// para que um CPF seja validado. A função deve ser no mesmo modelo da função anterior ex:
// validaCPF(cpf) e retornar verdadeiro ou falso

var recebeCPF = document.querySelector('#inputCPF')
var resultadoCPF = document.querySelector('#result-cpf')

var botaoCPF = document.querySelector('#button-cpf')
botaoCPF.addEventListener('click', isCPF)


resultadoCPF.disabled = true
resultadoCPF.style.color = ''
resultadoCPF.value = 'Aguardando CPF. . . .'

function isCPF() {

    var cpf = recebeCPF.value

    cpf = cpf.replace(/\.|-/g, "");
    let soma = 0;

    
    resposta = true
    soma += cpf[0] * 10;
    soma += cpf[1] * 9;
    soma += cpf[2] * 8;
    soma += cpf[3] * 7;
    soma += cpf[4] * 6;
    soma += cpf[5] * 5;
    soma += cpf[6] * 4;
    soma += cpf[7] * 3;
    soma += cpf[8] * 2;
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11)
        soma = 0;


    if (soma != cpf[9])

        resposta = false
    soma = 0;
    soma += cpf[0] * 11;
    soma += cpf[1] * 10;
    soma += cpf[2] * 9;
    soma += cpf[3] * 8;
    soma += cpf[4] * 7;
    soma += cpf[5] * 6;
    soma += cpf[6] * 5;
    soma += cpf[7] * 4;
    soma += cpf[8] * 3;
    soma += cpf[9] * 2;
    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11)
        soma = 0;
    if (soma != cpf[10])
        resposta = false


    if (resposta == true) {
        resposta = 'CPF Válido'
        resultadoCPF.style.color = 'green'
    }
    if (resposta == false) {
        resposta = 'CPF Inválido'
        resultadoCPF.style.color = 'red'

    }

    resultadoCPF.value = resposta


}


//_________________ EXERCICIO 03 _______________ //
// Crie uma função que gere telefones aleatórios, a função deve receber como parâmetro o
// número ddd e a quantidade de telefones e deve retornar um vetor com os números gerados.
// Ex: geraTelefones(19,3) e deve retornar ex: 19-98777-7898, 19-98777-7898, 19-94687-4568

var qtdTelefone = document.querySelector('#inpGeraTell')
var ddd = document.querySelector('#inpDDD')
var buttonGerarTell = document.querySelector('#button-geTell')
var resultadoGeraTell = document.querySelector('#result-geTell')

resultadoGeraTell.disabled = true

function gerarTelefones(ddd, quantidade) {
    
    let telefones = []
    for (let i = quantidade; i > 0; i--) {
        let phone = `${ddd}-${Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111}-${Math.floor(Math.random() * (9999 - 1111 + 1)) + 1111}`
        telefones.push(phone)
    }
    return telefones
}

buttonGerarTell.addEventListener("click", ()=> {
    let telefones = gerarTelefones(ddd.value, qtdTelefone.value)
    resultadoGeraTell.innerHTML = ''
    telefones.forEach(function(telefone){
       
       resultadoGeraTell.innerHTML += `${telefone} \n`
           
       
    })
    
})

function limpar (){
    for(let i = 0; i < 3; i ++) {
        document.getElementById('inpGeraTell').value = ''
        document.getElementById('inpDDD').value = ''
        document.getElementById('result-geTell').innerHTML = ''
    }
   
}


//_________________ EXERCICIO 04 _______________ //
// Crie uma função que gere CPFs válidos aleatórios, deve receber como parâmetro quantos CPFs deve gerar e retornar um vetor com os CPFs gerados.

function validaCPF(cpf) {

    let mult
    let soma = 0
    let indice = 0
    let resto

    //primeira conta
    if (cpf.length == 11) {
        for (let i = 10; i >= 2; i--) {
            mult = i * cpf[indice]
            soma += mult
            indice++
        }
        resto = (soma * 10) % 11

        if (resto == 10 || resto == 11) {
            resto = 0
        }
        if (resto != cpf[9]) {
            //console.log("Cpf invalido")
            return false
        } else {
            //segunda conta
            indice = 0
            soma = 0
            for (let i = 11; i >= 2; i--) {
                mult = i * cpf[indice]
                soma += mult
                indice++
            }
            resto = (soma * 10) % 11
            if (resto == cpf[10]) {
                //console.log("Cpf valido")
                return true
            } else {
                //console.log("Cpf invalido")
                return false
            }
        }
    } else {
        return false
        //console.log("tamanho do cpf excedido")
    }

}

var qtdCPF = document.querySelector('#inpGeraCPF')
var buttonGeCPF = document.querySelector('#button-geCPF')
var resultadoGeraCpf = document.querySelector('#result-geCPF')



resultadoGeraCpf.disabled = true
   
    function gerarCPF(quantidade) {
        let indice = 0
        var cpfs = []
    
        while (indice != quantidade) {
            let cpfGerado = Math.floor(Math.random() * (99999999999 - 00000000000 + 1) + 00000000000).toString()
            if (validaCPF(cpfGerado)) {
                cpfs.push(cpfGerado)
                indice++
            }
        }
    
        return cpfs
    
    }
    
    buttonGeCPF.addEventListener("click", () => {
        let cpfs = gerarCPF(qtdCPF.value)
        resultadoGeraCpf.innerHTML = ''
        cpfs.forEach(function(cpf){
            resultadoGeraCpf.value += `${cpf} \n`
        })
    })
    
    function limparGeCPF (){
            document.getElementById('inpGeraCPF').value = ''
            document.getElementById('result-geCPF').value = ''  
    }















