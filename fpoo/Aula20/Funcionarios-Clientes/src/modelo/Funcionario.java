package modelo;

public class Funcionario extends Pessoas {

	private int matricula;
	private double comissao;

	public void Funcionario() {

	}

	public Funcionario(String nome, String telefone, String nascimento, int matricula, double comissao) {
		super(nome, telefone, nascimento);
		this.matricula = matricula;
		this.comissao = comissao;
	}

	public int getMatricula() {
		return this.matricula;
	}

	public void setMatricula(int matricula) {
		this.matricula = matricula;
	}

	public double getComissao() {
		return this.comissao;
	}

	public void setComissao(double comissao) {
		this.comissao = comissao;
	}

	@Override
	public String toString() {
		return "\n ----- Listando Funcionário ----- \nNome:" + getNome() + "\nTelefone: " + getTelefone() + " \nMatricula: " + matricula + "\nNascimento: "
				+ getNascimento() + "\nComissao: " + comissao + " ";
	}

}