package uteis;

import java.util.Scanner;

import controle.ManutencaoProcessa;
import modelo.Manutencao;

public class TesteConsole {

	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {
		ManutencaoProcessa.carregar();
		for (Manutencao u : ManutencaoProcessa.usuarios) {
			System.out.println(u.toString());
		}
		System.out.print("Digite o email:");
		int indice = ManutencaoProcessa.checarEmail(scan.next());
		if (indice != -1) {
			System.out.print("Digite a senha:");
			if (ManutencaoProcessa.checarSenha(indice, Cripto.encripta(scan.next()))) {
				System.out.println("Acesso permitido");
			} else {
				System.out.println("Acesso negado");
			}
		} else {
			System.out.println("Usu�rio n�o encontrado");
		}
	}

}
