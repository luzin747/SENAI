package controle;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;

import modelo.Orcamento;

public class OrcamentoDAO {
	
	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "./dados/Orcamentos.csv";

	public ArrayList<Orcamento> ler() {
		ArrayList<Orcamento> linhas = new ArrayList<>();
		Orcamento usuario;
		try {
			br = new BufferedReader(new FileReader(arquivo));
			String linha = br.readLine();
			while(linha != null) {
				usuario = new Orcamento(linha);
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
	
	public void escrever(ArrayList<Orcamento> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo));
			for (Orcamento u : linhas) {
				bw.write(u.toCSV());
			}
			bw.close();
		} catch (IOException e) {
			System.out.println(e);
		}
	}
}
