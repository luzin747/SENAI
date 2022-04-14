package main;

import java.util.ArrayList;
//import java.io.BufferedReader;
//import java.io.BufferedWriter;
//import java.io.FileNotFoundException;
//import java.io.FileReader;
//import java.io.FileWriter;
//import java.io.IOException;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		Arquivo arq = new Arquivo();
		
		int opcao = 0;
		
		do {
			System.out.println("1- Cadastrar");
			System.out.println("2- Listar");
			System.out.println("0- Sair");
			opcao = entrada.nextInt();
			
			entrada.nextLine();
		
		switch(opcao) {
			case 1:
				System.out.println("Informe o seu nome : ");
				String nome = entrada.nextLine();
				
				System.out.println("Informe sua Idade : ");
				String idade = entrada.nextLine();
				
				System.out.println("Informe sua Cidade : ");
				String cidade = entrada.next();
				
				String data = nome + ";" + idade + ";" + cidade;
				
				arq.Escrever(data, "Pessoas" , true);
				
				System.out.println("Cadastrado!");
				break;
				
			case 2:
				ArrayList<String> infoFile = arq.ler("Pessoas");
				
				System.out.println("Informe o nome que deseja Localizar");
				String busca = entrada.nextLine();
				
				for(String linha : infoFile) {
					String[] temp = linha.split(";");
					if(temp[2].toLowerCase().contains(busca.toLowerCase())) {
						System.out.println("Nome : " + temp[0]);
						System.out.println("Idade : " + temp[1]);
						System.out.println("Cidade : " + temp[2]);
					}
					
				}
				
				break;
			case 0:
				System.out.println("Inté");
				break;
			}
		
			}while(opcao!=0);
	}
}




