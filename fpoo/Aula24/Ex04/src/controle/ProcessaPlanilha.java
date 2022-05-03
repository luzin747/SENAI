package controle;

import java.util.ArrayList;

import modelo.Planilha;


public class ProcessaPlanilha {

	private static DAO dao = new DAO();
	public static ArrayList<Planilha> linhas = new ArrayList<>();
	
	public static void carregar() {
		linhas = dao.abrir();
		
	}

	public static void saida(String email, String senha) {
		dao.validarConta(email, senha, linhas);
	}
}