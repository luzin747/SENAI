//1° - 

let a = 5000, b = 5000, c = 2000

//Triângulo equilátero (Todos os Lados Iguais)

if (a == b && a == c) {
    console.log("Triângulo Equilátero")
}
//Triângulo escaleno (Todos os Lados Diferentes)
else if (a != b && a != c && b != c) {
    console.log("Triângulo Escaleno")
}
//Triângulo Isóceles (Dois Lados Iguais)
else {
    console.log("Triângulo Isóceles")
}

//2° - 

var salarios = [1000, 3000, 7000]

salarios.forEach((salario) => {

    if (salario < 1904) {
        console.log('Resultado da Aliquota - Isento')
    }
    else if (salario > 1905 && salario < 2826) {
        console.log('Resultado da Aliquota - Desconto de 7,50%')
    }
    else if (salario > 2826 && salario < 3751) {
        console.log('Resultado da Aliquota - Desconto de 15,00%')
    }
    else if (salario > 3751 && salario < 4664) {
        console.log('Resultado da Aliquota - Desconto de 22,50%')
    }
    else {
        console.log('Resultado da Aliquota - Desconto de 27,50%')

    }
})

//3° - 

var qtdFilhos = 10
var salarioFunc = 1900

var totalFilhos = qtdFilhos * 56.47

var salarioTotal = totalFilhos + salarioFunc

if (salarioFunc < 1655.98) {
    if (qtdFilhos > 2) {
        console.log("Caramba Tem oq fazer não, muito filho slc")
        console.log(`Você atende ao beneficio R$${totalFilhos}`)
    }

} else {
    console.log("\nVocê não atende a esmola, se fode ai")
}










