package modelo;

import java.util.Objects;

public class Usuario {
	
	//Variáveis
	private String email;
	private String senha;
	
	//Métodos
	public Usuario(String email, String senha) {
		this.email = email;
		this.senha = senha;
	}
	
	public Usuario(String linha) {
		this.email = linha.split(";")[0];
		this.senha = linha.split(";")[1];
	}
	
	//Métodos de acesso(Getters && Setters)
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;;
	}
	
	public String getSenha() {
		return senha;
	}
	
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	//Junto deste comunicado, consta um hash code, 
	//que nada mais é que uma ferramenta que permite que o banco confirme e valide as 
	//informações prestadas junto à Receita Federal, para dar segurança ao acesso ou autenticação de 
	//determinados documentos.
	
	public  int hashCode() {
		return Objects.hash(email);
	}

	public boolean equals(Object obj) {
			if(this == obj) 
				return true;
			if(obj == null)
				return false;
			if(getClass() != obj.getClass())
				return false;
			
			Usuario other = (Usuario) obj;
			return Objects.equals(email, other.email);		
	}
	
	//Saída
	public String toString() {
		return email + "\t" + senha;
	}
	
	public String toCSV() {
		return email + ";" + senha + "\r\n";
	}
}
