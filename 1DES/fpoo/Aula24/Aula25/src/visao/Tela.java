package visao;

import java.util.Scanner;

import controle.ProcessaPlanilha;

public class Tela {

	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {

		ProcessaPlanilha.carregar(); 
		int menu = 0;

		while (menu != 5) {
			System.out.println("\n1.Soma \n2.Subtração \n3.Divisão \n4.Multiplicação \n5.Sair");
			menu = scan.nextInt();
			
			ProcessaPlanilha.saida(menu);
			
			
		}
	}

}
