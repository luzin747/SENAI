package modelo;

public class Planilha {
	
	private String nome;
	private int idade;
	
	public Planilha(String entrada) {
		nome = (entrada.split(";")[0]);
		idade = Integer.parseInt(entrada.split(";")[1]);
	}
	
	public String toString() {
		return nome + ";" + (2022 - idade);
	}
}