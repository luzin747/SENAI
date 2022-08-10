package main;

import java.util.Scanner;

public class Main {

	private static Arquivo arq = new Arquivo();
	private static Scanner entrada = new Scanner(System.in);
	private static ArrayList<String> usuario = new ArrayList<>();

	public static void main(String[] args) {
		
		arq.ler("adm;adm123");
		
		logar();
		
		int opcao = 0;
		while(opcao != 3) {
			switch(opcao) {
				case 1:
					cadastrarUsuario();
					break;
				case 2:
					logar();
					break;
				}
			}

	}

	private static void logar() {
		System.out.println("Digite o Nome do Usuario: ");
		String usuario = entrada.next();
		System.out.println("Digite a Senha: ");
		String senha = entrada.next();
		
		for (String login : usuario) {
			
		}
		
	}

	private static void cadastrarUsuario() {
		// TODO Auto-generated method stub
		
	}

}
