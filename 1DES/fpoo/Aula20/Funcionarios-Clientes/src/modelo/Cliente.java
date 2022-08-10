package modelo;

import java.util.Date;

public class Cliente extends Pessoas {

	private int id;
	private double creditoLimite;
	
	public void Cliente() {
		
	}
	public Cliente(String nome,String telefone,String nascimento,int id,double creditoLimite) {
		super(nome,telefone,nascimento);
		this.id = id;
		this.creditoLimite = creditoLimite;
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getCreditoLimite() {
		return this.getCreditoLimite();
	}

	public void setCredutoLimite(double creditoLimite) {
		this.creditoLimite = creditoLimite;
	}

	@Override
	public String toString() {
		return "\n----- Listando Cliente ----- \nNome:" + getNome() + "\nTelefone: " + getTelefone() + " \nID: " + id + "\nNascimento: "
				+ getNascimento() + "\nLimite de Crédito: " + creditoLimite + " ";
	}

}