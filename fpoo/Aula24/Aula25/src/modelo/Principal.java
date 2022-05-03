package modelo;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Principal {
	
	static BufferedReader br;
	static String entrada = "D:\\Luiz1DES\\SENAI\\fpoo\\Aula24\\Aula25\\arquivos\\entrada.csv";


	public static void main(String[] args) {
		try {
			br = new BufferedReader(new FileReader(entrada));
			String linha = br.readLine();

			while (linha != null) {
				String[] vetor = linha.split(";");
				int vl = Integer.parseInt(vetor[0]);
				int v2 = Integer.parseInt(vetor[1]);
				int soma = vl + v2;
				System.out.println(vetor[0]+vetor[1]);
				linha = br.readLine();
			}

			br.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}


