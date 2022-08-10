package controle;

import java.util.ArrayList;

import modelo.Usuario;

public class UsuarioProcessa {

	public static ArrayList<Usuario> usuarios = new ArrayList<>();
	private static UsuarioDAO ud = new UsuarioDAO();

	public static void carregar() {
		usuarios = ud.abrir();
	}

	public static int checarUsuario(String usuario) {
		int retorno = -1;
		for (int i = 0; i < usuarios.size(); i++) {
			if (usuarios.get(i).getUsuario().equals(usuario)) {
				return i;
			}
		}
		return retorno;
	}

	public static boolean checarSenha(int indice, String anoNasc) {
		if (usuarios.get(indice).getAnoNascimento().equals(anoNasc)) {
			return true;
		}
		return false;
	}
}