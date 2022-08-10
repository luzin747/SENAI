//Apenas analistas e desenvolvedores podem possuir Admin os demais são apenas leitores;
//Apenas cargos de nível 3 ou superior podem ser Admin;
//Cargos inferiores a 3 podem ser removidos da lista de acesso;

var cartoes = [
	{
		"img": "http://cdn.onlinewebfonts.com/svg/img_568656.png",
		"funcionario": "Sancho Cedraz",
		"cargo": {
			"nome": "Analista",
			"nivel": 2
		},
		"autorizado": true
	},
	{
		"img": "https://pic.onlinewebfonts.com/svg/img_432585.png",
		"funcionario": "Ionara Pederneiras",
		"cargo": {
			"nome": "Técnico",
			"nivel": 2
		},
		"autorizado": true
	},
	{
		"img": "http://cdn.onlinewebfonts.com/svg/img_568656.png",
		"funcionario": "Filipe Castanho",
		"cargo": {
			"nome": "Desenvolvedor",
			"nivel": 1
		},
		"autorizado": false
	},
	{
		"img": "https://pic.onlinewebfonts.com/svg/img_432585.png",
		"funcionario": "Lívia Bicalho",
		"cargo": {
			"nome": "Analista",
			"nivel": 3
		},
		"autorizado": true
	},
	{
		"img": "http://cdn.onlinewebfonts.com/svg/img_568656.png",
		"funcionario": "Mauro Varanda",
		"cargo": {
			"nome": "Desenvolvedor",
			"nivel": 3
		},
		"autorizado": false
	},
	{
		"img": "http://cdn.onlinewebfonts.com/svg/img_568656.png",
		"funcionario": "Sandro Rosário",
		"cargo": {
			"nome": "Técnico",
			"nivel": 3
		},
		"autorizado": true
	}
]

var cards = document.querySelector(".card")

document.querySelector("#status").disabled = true

function carregar() {
	cartoes.forEach(item => {
		let novoCard = cards.cloneNode(true)

		novoCard.classList.remove("modelo")

		novoCard.querySelector("#img-item").src = item.img
		novoCard.querySelector("#nome-card").innerHTML = item.funcionario
		novoCard.querySelector("#nome-cargo").innerHTML = item.cargo.nome
		novoCard.querySelector("#nivel").innerHTML = item.cargo.nivel
		
		if(item.autorizado == true){			
			novoCard.querySelector("#status").innerHTML = "Atorizado"
			novoCard.querySelector("#status").style.color = 'green' 

		}else {
			novoCard.querySelector("#status").innerHTML = "Não Autorizado"
			novoCard.querySelector("#status").style.color = 'red' 

		}


		console.log(item.funcionario + " " + item.cargo.nivel)

		if (item.cargo.nivel == 3) {
			novoCard.querySelector("#button").disabled = true

			if(item.funcionario == 'Desenvolvedor' || item.funcionario == "Analista") {
				novoCard.querySelector("#admin").innerHTML = "Admin"
			}

		}


		document.querySelector(".cont").appendChild(novoCard)




	})
}


function remover(e) {

	cartoes.forEach(item => {

		e.parentNode.remove()

	})

}