var alunos = fetch("http://localhost:3000/academia/alunos")
var aparelhos = fetch("http://localhost:3000/academia/aparelhos")
var exercicios = fetch("http://localhost:3000/academia/exercicios")
var fichas = fetch("http://localhost:3000/academia/fichas")


var cardsAlunos = document.querySelector("#Alunos")
var cardsAparelhos = document.querySelector("#aparelhos")
var cardsExercicios = document.querySelector("#exercicios")
var cardsFichas = document.querySelector("#fichas")

alunos.then((response) => {
    return response.json();
})

.then((data) => {
    
    data.forEach(aluno => {

        var novoCardAlunos = cardsAlunos.cloneNode(true)

        novoCardAlunos.classList.remove('model')
        
            novoCardAlunos.querySelector("#idAluno").innerHTML = aluno.id_aluno
            
            
            novoCardAlunos.querySelector("#nomeAluno").innerHTML = aluno.nome
            novoCardAlunos.querySelector("#dataNascimento").innerHTML = aluno.nascimento
            novoCardAlunos.querySelector("#sexo").innerHTML = aluno.sexo
            novoCardAlunos.querySelector("#peso").innerHTML = aluno.peso
            novoCardAlunos.querySelector("#telefone").innerHTML = aluno.telefone
            
      
        
        
        document.querySelector("#contAlunos").appendChild(novoCardAlunos)

    })
  
})

aparelhos.then((response) => {
    return response.json();
})

.then((data) => {
    data.forEach(aparelho => {
        var novoCardAparelhos = cardsAparelhos.cloneNode(true)

        novoCardAparelhos.classList.remove("model")

       
        novoCardAparelhos.querySelector("#id_aparelho").innerHTML = aparelho.id_aparelho

        novoCardAparelhos.querySelector("#nomeAparelho").innerHTML = aparelho.nome
        

        document.querySelector("#contAparelhos").appendChild(novoCardAparelhos)
    })
    
})

exercicios.then((response) => {
    return response.json();
})

.then((data) => {

    data.forEach(exercicio => {

        var novoCardExercicios = cardsExercicios.cloneNode(true)

        novoCardExercicios.classList.remove("model")

        novoCardExercicios.querySelector("#id_exercicio").innerHTML = exercicio.id_exercicio
        novoCardExercicios.querySelector("#descricao").innerHTML = exercicio.descricao
        novoCardExercicios.querySelector("#grupo_muscular").innerHTML = exercicio.grupo_muscular
        novoCardExercicios.querySelector("#id_aparelho").innerHTML = exercicio.id_aparelho



        document.querySelector("#contExercicios").appendChild(novoCardExercicios)


    })

})

fichas.then((response) => {
    return response.json();
})

.then((data) => {

    data.forEach(ficha => {


        var novoCardFichas = cardsFichas.cloneNode(true)

        novoCardFichas.classList.remove("model")

        novoCardFichas.querySelector("#id_aluno").innerHTML = ficha.id_aluno
        novoCardFichas.querySelector("#id_exercicio").innerHTML = ficha.id_exercicio
        novoCardFichas.querySelector("#dia_semana").innerHTML = ficha.dia_semana
        novoCardFichas.querySelector("#serie").innerHTML = ficha.serie

        document.querySelector("#contFichas").appendChild(novoCardFichas)

        



    })

})
