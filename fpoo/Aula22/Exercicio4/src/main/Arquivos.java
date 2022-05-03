package main;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

public class Arquivos {
	
	
	public void escrever(String info) {
		try {
			FileWriter fw = new FileWriter("Usuarios.txt", true);
			BufferedWriter bw = new BufferedWriter(fw);
			
			bw.write(info);
			
			bw.close();
			fw.close();
		}catch (Exception e) {
			System.out.println(e.toString());
		}
	}
	public ArrayList<String> ler (String fileName) {
		ArrayList<String> usuario = new ArrayList<>();
		
		try {
			FileReader fr = new FileReader(fileName + ".txt");
			BufferedReader br = new BufferedReader(fr);
			
			String linha = "";
			
			while((linha = br.readLine()) != null) {
				usuario.add(linha);
			}
			
			br.close();
			fr.close();
		}catch (Exception e) {
			System.out.println(e.toString());
		}
		
		return data;
	}
	
}
