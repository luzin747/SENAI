package modelo;

public class Pessoas {

	private String nome;
	private String telefone;
	private String nascimento;

	public void Pessoas() {

	}

	public Pessoas(String nome, String telefone, String nascimento) {
		this.nome = nome;
		this.telefone = telefone;
		this.nascimento = nascimento;

	}

	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTelefone() {
		return this.telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getNascimento() {
		return this.nascimento;
	}

	public void setNascimento(String nascimento) {
		this.nascimento = telefone;
	}

	@Override
	public String toString() {
		return "Pessoas [nome=" + nome + ", telefone=" + telefone + ", nascimento=" + nascimento + ", getNome()="
				+ getNome() + ", getTelefone()=" + getTelefone() + ", getNascimento()=" + getNascimento() + "]";
	}

}