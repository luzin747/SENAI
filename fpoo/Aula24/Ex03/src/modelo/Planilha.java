package modelo;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class Planilha {
	
	private static BufferedReader br;
	private static String entrada ="D:\\Luiz1DES\\SENAI\\fpoo\\Aula24\\Ex03\\dados\\entrada.csv";

		public static void main(String[] args) {
			ArrayList<Integer> linhas = new ArrayList<>();
			Integer d;
			
			try {
				br = new BufferedReader(new FileReader(entrada));
				String l = br.readLine();
				
				while(l != null) {
					d = Integer.parseInt(l);
					linhas.add(d);
					l = br.readLine();
				}
				br.close();
			}catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
			linhas.sort(null);
			
			for(Integer i: linhas) {
				System.out.println(i);
			
		}	
	}
}