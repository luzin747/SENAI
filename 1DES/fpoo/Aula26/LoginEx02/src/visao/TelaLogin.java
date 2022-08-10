package visao;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

import controle.UsuarioProcessa;

public class TelaLogin<E> extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	// Atributos da tela
	private JPanel painel;
	private JLabel rotulo1,rotulo2,rotulo3,rotulo4,rotulo5,rotulo6,rotulo7,rotulo8;
	private JTextField id,raca,nome,peso,nascimento,dono,telefone;
	private JComboBox especie;
	private JButton login,buscar,alterar,excluir;

	TelaLogin() {
		// Propriedades B�sicas
		setTitle("Tela de Login");
		setBounds(600, 300, 640, 450);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel(); //Painel de elementos
		setContentPane(painel); //Configua o painel
		setLayout(null);

		// Conte�dos da tela
		rotulo1 = new JLabel("Id:");
		rotulo1.setBounds(30, 25, 100, 20);
		id = new JTextField();
		id.setBounds(120, 20, 200, 30);
		
		rotulo2 = new JLabel("Especie:");
		rotulo2.setBounds(30, 68, 100, 20);
		especie = new JComboBox<E>();
		especie.setBounds(120, 60, 200, 30);
		
		rotulo3 = new JLabel("Raça:");
		rotulo3.setBounds(30, 105, 100, 20);
		raca = new JTextField();
		raca.setBounds(120, 100, 200, 30);
		
		rotulo4 = new JLabel("Nome: ");
		rotulo4.setBounds(30, 142, 100, 20);
		nome = new JTextField();
		nome.setBounds(120, 140, 200, 30);
		
		rotulo5 = new JLabel("Peso");
		rotulo5.setBounds(30, 179, 100, 20);
		peso = new JTextField();
		peso.setBounds(120, 180, 200, 30);
		
		rotulo6 = new JLabel("Nascimento: ");
		rotulo6.setBounds(30, 220, 100, 20);
		nascimento = new JTextField();
		nascimento.setBounds(120, 220, 200 , 30);
		
		rotulo7 = new JLabel("Dono:");
		rotulo7.setBounds(30, 253, 100, 20);
		dono = new JTextField();
		dono.setBounds(120, 260, 200, 30);
		
		rotulo8 = new JLabel("Telefone ");
		rotulo8.setBounds(30, 290, 100, 20);
		telefone = new JTextField();
		telefone.setBounds(120, 300, 200, 30);
	
		login = new JButton("Cadastrar ");
		login.setBounds(380, 20, 150, 30);
		
		buscar = new JButton("Excluir ");
		buscar.setBounds(380, 60, 150, 30);
		
		alterar = new JButton("Alterar ");
		alterar.setBounds(380, 100, 150, 30);
		
		excluir = new JButton("Excluir ");
		excluir.setBounds(380, 140, 150, 30);
		
		//Habilitando o evento de clicar no bot�o
		login.addActionListener(this);

		//Adicioar todos os elementos no painel
		painel.add(rotulo1);
		painel.add(id);
		
		painel.add(rotulo2);
		painel.add(especie);
		
		painel.add(rotulo3);
		painel.add(raca);
		
		painel.add(rotulo4);
		painel.add(nome);
		
		painel.add(rotulo5);
		painel.add(peso);
		
		painel.add(rotulo6);
		painel.add(nascimento);
		
		painel.add(rotulo7);
		painel.add(dono);
		
		painel.add(rotulo8);
		painel.add(telefone);
		
		
		painel.add(login);
		painel.add(buscar);
		painel.add(alterar);
		painel.add(excluir);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == login) {
			int indice = UsuarioProcessa.checarUsuario(id.getText());
			if (indice != -1) {
				if (UsuarioProcessa.checarSenha(indice, raca.getText())) {
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