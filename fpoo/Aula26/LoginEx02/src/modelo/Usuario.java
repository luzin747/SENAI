package modelo;

public class Usuario {
	
	//Atributos
	private String usuario;
	private String anoNasc;

	//Construtores
	public Usuario(String email, String senha) {
		super();
		this.usuario = email;
		this.anoNasc = senha;
	}

	public Usuario(String linha) {
		super();
		this.usuario = linha.split(";")[0];
		this.anoNasc = linha.split(";")[1];
	}

	//M�todos de acesso (Getters && Setters)
	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String email) {
		this.usuario = email;
	}

	public String getAnoNascimento() {
		return anoNasc;
	}

	public void setAnoNascimento(String anoNasc) {
		this.anoNasc = anoNasc;
	}
	
	//Sa�das
	@Override
	public String toString() {
		return usuario + "\t********";
	}
}