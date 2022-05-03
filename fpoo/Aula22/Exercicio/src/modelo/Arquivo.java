package modelo;

import java.util.ArrayList;
import java.util.Scanner;
import modelo.ArmazenarNomeNascimento;

//1 - Em um arquivo de texto, armazene o nome e o ano de nascimento das pessoas.
//ao ler esse arquivo o sistema irá informar o nome e a idade.

public class Arquivo {

	public static void main(String[] args) {
		
		ArmazenarNomeNascimento arq = new ArmazenarNomeNascimento();
		Scanner input = new Scanner(System.in);
		
		int opcao = 0;
		
		do {
			System.out.println("1 - Cadastrar;");
			System.out.println("2 - Listar;");
			System.out.println("0 - Sair;");
			opcao = input.nextInt();
			input.nextLine();
			
			switch(opcao) {
				case 1: 
					System.out.println("Informe o seu nome : ");
					String nome = input.nextLine();
					
					System.out.println("Informe o seu ano de Nascimento: ");
					String anoNasc = input.next();
					
					String data = "Nome: " + nome + "\r" + "\nNasceu: " + anoNasc + "\r\n---------------------";
					
					arq.escrever(data, "Pessoas", true);
					break;
				case 2:
					ArrayList<String> infoFile = arq.ler("Pessoas");
					
					System.out.println("Informe o nome que deseja localizar : ");
					String busca = input.nextLine();
				
					for(String linha : infoFile) {
						String[] temp = linha.split(";");
						if(temp[1].toLowerCase().contains(busca.toLowerCase())) {
							System.out.println("Nome : " + temp[0]);
							System.out.println("Idade : " + temp[1]);
						}else {
							System.out.println("Item NÃO Encontrado!");
						}
					}
					break;
				case 0:
					System.out.println("Inté");
					break;
			}
		}while(opcao != 0);
		
		
		
	}

}