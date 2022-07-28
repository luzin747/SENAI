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

function validarPlaca() {
    resposta = `Placa inválida`
    console.log(buscaPlaca);

    const placaAntiga = /^[a-zA-Z]{3}[0-9]{4}$/
    const placaNova = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/

    if (placaAntiga.test(buscaPlaca.value)) {
        resposta = `Placa Valida`
    }else if (placaNova.test(buscaPlaca.value)) {
        resposta = `Placa Valida`
    }
        
    resultado.value = resposta
    
}

// – Crie uma função para validar se um CPF é válido, busque na internet quais são as regras 
// para que um CPF seja validado. A função deve ser no mesmo modelo da função anterior ex: 
// validaCPF(cpf) e retornar verdadeiro ou falso



var buscaCPF = document.querySelector("#inputCPF")
var buton = document.querySelector("#button-cpf")
var resultadoCPF = document.querySelector("#result-cpf")


resultadoCPF.disabled = true
buton.addEventListener("click", )

function validarCPF() {
    if (buscaCPF(document.frmcpf.cpf.value))
    {
        document.frmcpf.submit();
    } else {
        errors = "1";
        if (errors)
            alert('CPF inválido');
        document.retorno = (errors == '');
    }
}

function vercpf(cpf) {
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;

    add = 0;

    for (i = 0; i &lt; 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
            for (i = 0; i &lt; 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    alert('O CPF INFORMADO É VÁLIDO.');
    return true;
}

$j(document).ready(function () {

    $j("#meuForm").validate({
        rules: {
            NrCpf: {NrCpf: true, required: true}
        },
        messages: {
            NrCpf: {NrCpf: alert('CPF Inválido')}
        }
    });
});



