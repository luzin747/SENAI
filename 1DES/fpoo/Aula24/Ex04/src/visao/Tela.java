package visao;

import java.util.Scanner;

import controle.ProcessaPlanilha;

public class Tela {

	static Scanner scan = new Scanner(System.in);
	
	public static void main(String[] args) {
		ProcessaPlanilha.carregar();
		
		System.out.println("Digite seu login: ");
		String email = scan.nextLine();
		
		System.out.println("Digite sua senha: ");
		String senha = scan.nextLine();
		
		ProcessaPlanilha.saida(email, senha);
	}
}