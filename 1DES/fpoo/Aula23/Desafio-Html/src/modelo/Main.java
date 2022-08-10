package modelo;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.awt.Desktop;

public class Main {

	public static void main(String[] args) {

		html arq = new html();
		Scanner entrada = new Scanner(System.in);
		
		

		int opcao = 0;

		do {
			System.out.println("1 - Escrever Mensagem;");
			System.out.println("2 - Fazer Lista;");
			System.out.println("3 - Fazer Tabela");
			System.out.println("4 - Abrir html");
			System.out.println("5 - Limpar Tudo");
			System.out.println("0 - Sair;");
			opcao = entrada.nextInt();
			entrada.nextLine();

			switch (opcao) {
			case 1:
				System.out.println("Escreva Uma Mensagem:");
				String mensagem = entrada.nextLine();

				String data = "<h1> " + mensagem + "</h1>";

				arq.escrever(data, "Pessoas", false);
				break;

			case 2:

				System.out.println("Quantos Itens da Lista:");
				int qtdLista = entrada.nextInt();

				int[] QtdLista = new int[qtdLista];

				for (int i = 0; i < QtdLista.length; i++) {

					System.out.println("Digite o Item " + i);
					String msg = entrada.next();

					String data1 = "<ul>" + "<li>" + msg + "</li>" + "</ul>";

					arq.escrever(data1, "Pessoas", true);

				}
				break;
			
				
			case 3:
				
				System.out.println("Quantos Titulos da Tabela:");
				int qtdTitulo = entrada.nextInt();

				int[] QtdTabelaTitulo = new int[qtdTitulo];

				for (int i = 0; i < QtdTabelaTitulo.length; i++) {

					System.out.println("Digite o Titulo " + i + ":");
					String msg = entrada.next();
					
					System.out.println("Digite o Titulo " + i + ":");
					String msg1 = entrada.next();
					
					System.out.println("Digite o Item " + i + ":");
					String item = entrada.next();

					String data2 = "<table>" + 
										"<tr>" + 
											"<th>" + msg + "</th>" +
											"<th>" + msg1 + "</th>" +
												"<tr>" + 
													"<td>" + item + 
												"</tr>"+
										"</tr>" + 
									"</table>";

					arq.escrever(data2, "Pessoas", true);
				}
			case 4:
				Desktop desktop = null;
				desktop = Desktop.getDesktop();
				URI url = null;

				File file = new File("D:\\Luiz1DES\\SENAI\\fpoo\\Aula23\\Desafio-Html\\Pessoas.html");

				try {

				    url = new URI(file.toURI().toString());
				    desktop.browse(url);

				} catch (URISyntaxException | IOException ex) {
				    Logger.getLogger(html.class.getName()).log(Level.SEVERE, null, ex);
				}
				break;
			case 5:

				String data1 = "";

				arq.escrever(data1, "Pessoas", false);

				break;
				
				

			case 0:
				System.out.println("Inté");
				break;
			}
		} while (opcao != 0);

	}

}