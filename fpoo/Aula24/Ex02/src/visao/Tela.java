package visao;


import controle.ProcessaPlanilha;

public class Tela {

	public static void main(String[] args) {

		ProcessaPlanilha.carregar(); 
		ProcessaPlanilha.saida();
		System.out.println("Médias calculadas com sucesso");
	}

}
