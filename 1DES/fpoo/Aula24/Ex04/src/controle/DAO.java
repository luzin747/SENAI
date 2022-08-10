package controle;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Planilha;


public class DAO {
		
	private BufferedReader br;
	private String entrada ="D:\\Luiz1DES\\SENAI\\fpoo\\Aula24\\Ex04\\dados\\entrada.csv";
	
	public ArrayList<Planilha> abrir(){
		ArrayList<Planilha> linhas = new ArrayList<>();
		Planilha d;
		
		try {
			br = new BufferedReader(new FileReader(entrada));
			String l = br.readLine();
			
			while(l != null) {
				d = new Planilha (l);
				linhas.add(d);
				l = br.readLine();
			}
			br.close();
		}catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return linhas;
	}
	
	public boolean validarConta(String email, String senha, ArrayList<Planilha> linhas) {
		Planilha d = new Planilha(email + ";" + senha);
		
		if(d.validaEmail(email, linhas)) {
			if (d.validaSenha(email, senha, linhas)) {
				System.out.println("Acesso permitido");
				return true;
			} else {
				System.out.println("Acesso negado");
				return false;
			}
		} else {
			System.out.println("usu�rio n�o encontrado");
			return false;
		}
	}

}

