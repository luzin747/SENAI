package controle;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;

import modelo.Manutencao;

public class ManutencaoDAO {
	
	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "./dados/Manutencoes.csv";

	public ArrayList<Manutencao> ler() {
		ArrayList<Manutencao> linhas = new ArrayList<>();
		Manutencao usuario;
		try {
			br = new BufferedReader(new FileReader(arquivo));
			String linha = br.readLine();
			while(linha != null) {
				usuario = new Manutencao(linha);
				linhas.add(usuario);
				linha = br.readLine();
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println(e);
		} catch (IOException e) {
			System.out.println(e);
		} catch (ParseException e) {
			System.out.println(e);
		}
		return linhas;
	}
	
	public void escrever(ArrayList<Manutencao> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo));
			for (Manutencao u : linhas) {
				bw.write(u.toCSV());
			}
			bw.close();
		} catch (IOException e) {
			System.out.println(e);
		}
	}
}
