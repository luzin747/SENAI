package controle;

import java.util.ArrayList;

import modelo.Manutencao;

public class ManutencaoProcessa {

	public static ArrayList<Manutencao> manutencoes = new ArrayList<>();
	private static ManutencaoDAO md = new ManutencaoDAO();

	public static void carregar() {
		manutencoes = md.ler();
	}
	
	public static void salvar() {
		md.escrever(manutencoes);
	}

}
