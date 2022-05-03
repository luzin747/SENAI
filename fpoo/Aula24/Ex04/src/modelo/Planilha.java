package modelo;

import java.util.ArrayList;

public class Planilha {
	
	private String nome;
	private String senha;
	
	public Planilha(String entrada) {
		nome = (entrada.split(";")[0]);
		senha = (entrada.split(";")[1]);
		
	}
	
	public boolean validaEmail(String email, ArrayList<Planilha> contas) {
		boolean achou = false;
		for (Planilha dados : contas) {
			if (this.nome.equals(dados.nome)) {
				achou = true;
				break;
			}
		}
		
		return achou;
	}
	
	public boolean validaSenha(String email, String senha, ArrayList<Planilha> contas) {
		boolean validou = false;
		
		for (Planilha dados : contas) {
			if (this.nome.equals(dados.nome) && this.senha.equals(dados.senha)) {
				validou = true;
				break;
			}
		}
		
		return validou;
	}

}
