package visao;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

import controle.UsuarioProcessa;

public class TelaLogin extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	// Atributos da tela
	private JPanel painel;
	private JLabel rotulo1, rotulo2;
	private JTextField usuario, anoNasc;
	private JButton login;

	TelaLogin() {
		// Propriedades B�sicas
		setTitle("Tela de Login");
		setBounds(600, 300, 300, 200);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel(); //Painel de elementos
		setContentPane(painel); //Configua o painel
		setLayout(null);

		// Conte�dos da tela
		rotulo1 = new JLabel("Usuário:");
		rotulo1.setBounds(20, 20, 100, 20);
		usuario = new JTextField();
		usuario.setBounds(120, 20, 80, 30);
		rotulo2 = new JLabel("Ano Nasc:");
		rotulo2.setBounds(20, 60, 100, 20);
		anoNasc = new JTextField();
		anoNasc.setBounds(120, 60, 80, 30);
		login = new JButton("Cadastrar");
		login.setBounds(50, 105, 200, 30);
		
		//Habilitando o evento de clicar no bot�o
		login.addActionListener(this);

		//Adicioar todos os elementos no painel
		painel.add(rotulo1);
		painel.add(usuario);
		painel.add(rotulo2);
		painel.add(anoNasc);
		painel.add(login);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == login) {
			int indice = UsuarioProcessa.checarUsuario(usuario.getText());
			if (indice != -1) {
				if (UsuarioProcessa.checarSenha(indice, anoNasc.getText())) {
					JOptionPane.showMessageDialog(this, "!! USER Cadastrado !!");
					this.dispose();// Fecha o Formul�rio
				} else {
					JOptionPane.showMessageDialog(this, "Acesso negado");
				}
			} else {
				JOptionPane.showMessageDialog(this, "Usuario Não Encontrado");
			}
		}
	}

	public static void main(String[] args) {
		UsuarioProcessa.carregar();
		TelaLogin tela = new TelaLogin();
		tela.setVisible(true);
	}
}