package controle;

import java.util.ArrayList;

import modelo.Planilha;

public class ProcessaPlanilha {

	public static ArrayList<Planilha> linhas = new ArrayList<>();

	private static DAO dao = new DAO();

	public static void carregar() {
		linhas = dao.abrir();
	}

	public static void saida(int opcao) {
		switch (opcao) {
		case 1:
			dao.salvarSoma(linhas);
			System.out.println("Somou!!");
			break;
		case 2:
			dao.salvarSub(linhas);
			System.out.println("Subtraiu!!!");
			break;
		case 3:
			dao.salvarDiv(linhas);
			System.out.println("Dividiu!!!!!");
			break;
		case 4:
			dao.salvarMult(linhas);
			System.out.println("Multiplicou!!!!");
			break;
		case 5:
			System.out.println("Saiu!");
			break;
		default:
			System.out.println("Opção Inválida");
			break;
		}
	}
}
