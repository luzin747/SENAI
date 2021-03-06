package visao;

import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.event.DocumentEvent;
import javax.swing.event.DocumentListener;
import javax.swing.table.DefaultTableModel;

import controle.ManutencaoProcessa;
import modelo.Manutencao;

public class FormManutencoes extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private JLabel title, linha, lbID, lbData, lbEquipamento, lbCusto, lbtempo;
	private JTextField tfID, tfData, tfCusto, tftempo, tftotal;
	private JComboBox<String> cbEquipamento;
	private JButton create, read, update, delete;
	private JScrollPane scroll;
	private JTable table;
	private DefaultTableModel tableModel;
	private int indice = -1;

	FormManutencoes() {

		// Propriedades B�sicas
		setTitle("Gerenciamento de usuários");
		setBounds(800, 250, 670, 520);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel(); // Painel de elementos
		setContentPane(painel); // Configua o painel
		setLayout(null);

		title = new JLabel("Cadastro de Manutenção");
		title.setBounds(130, 20, 1000, 30);
		title.setFont(new Font("Arial", Font.BOLD, 35));

		painel.add(title);

		// Textos e Bot�es

		linha = new JLabel("_________________________________________________________");
		linha.setBounds(15, 35, 660, 30);
		linha.setFont(new Font("", Font.BOLD, 20));
		painel.add(linha);

		lbID = new JLabel("ID:");
		lbID.setBounds(60, 90, 100, 30);
		lbID.setFont(new Font("Arial", Font.BOLD, 20));
		painel.add(lbID);

		lbData = new JLabel("Data:");
		lbData.setBounds(50, 130, 100, 30);
		lbData.setFont(new Font("Arial", Font.BOLD, 20));
		painel.add(lbData);

		lbEquipamento = new JLabel("Equipamento:");
		lbEquipamento.setBounds(20, 160, 200, 30);
		lbEquipamento.setFont(new Font("Arial", Font.BOLD, 20));
		painel.add(lbEquipamento);

		lbCusto = new JLabel("Custo:");
		lbCusto.setBounds(310, 83, 200, 30);
		lbCusto.setFont(new Font("Arial", Font.BOLD, 20));
		painel.add(lbCusto);

		lbtempo = new JLabel("Tempo:");
		lbtempo.setBounds(300, 122, 200, 30);
		lbtempo.setFont(new Font("Arial", Font.BOLD, 20));
		painel.add(lbtempo);

		// Text Field

		tfID = new JTextField();
		tfID.setBounds(160, 90, 60, 30);
		painel.add(tfID);

		tfData = new JTextField();
		tfData.setBounds(160, 125, 100, 30);
		painel.add(tfData);

		cbEquipamento = new JComboBox<String>(
				new String[] { "Impressora", "Celular", "Laptop", "Monitor", "Computador", "Videogame" });
		cbEquipamento.setBounds(160, 160, 135, 30);
		painel.add(cbEquipamento);

		tfCusto = new JTextField();
		tfCusto.setBounds(380, 85, 150, 30);
		painel.add(tfCusto);

		tftempo = new JTextField();
		tftempo.setBounds(380, 122, 150, 30);
		painel.add(tftempo);

		tftotal = new JTextField();
		tftotal.setBounds(380, 164, 150, 30);
		painel.add(tftotal);
		tftotal.setEnabled(false);

		create = new JButton("Cadastrar");
		read = new JButton("Consultar");
		update = new JButton("Alterar");
		delete = new JButton("Excluir");

		create.setBounds(40, 210, 120, 30);
		read.setBounds(180, 210, 120, 30);
		update.setBounds(320, 210, 120, 30);
		delete.setBounds(460, 210, 120, 30);

		painel.add(create);
		painel.add(read);
		painel.add(update);
		painel.add(delete);

		// Tabela de Professores (READ, UPDATE)
		tableModel = new DefaultTableModel();
		tableModel.addColumn("ID");
		tableModel.addColumn("data");
		tableModel.addColumn("Equipamento");
		tableModel.addColumn("Custo da Hora");
		tableModel.addColumn("Tempo");
		tableModel.addColumn(("Total"));
		if (ManutencaoProcessa.manutencoes.size() != 0) {
			preencheTabela();
		}
		table = new JTable(tableModel);
		table.setEnabled(false);
		scroll = new JScrollPane(table);
		scroll.setBounds(20, 255, 605, 215);
		painel.add(scroll);

		create.addActionListener(this);
		read.addActionListener(this);
		update.addActionListener(this);
		delete.addActionListener(this);

		update.setEnabled(false);
		delete.setEnabled(false);

		tfCusto.getDocument().addDocumentListener(new DocumentListener() {
			public void changedUpdate(DocumentEvent e) {
				warn();
			}

			public void removeUpdate(DocumentEvent e) {
				warn();
			}

			public void insertUpdate(DocumentEvent e) {
				warn();
			}

			public void warn() {

				try {
					double custo = Double.parseDouble(tfCusto.getText().replace(",", "."));
					double total = 0d;
					if (tftempo.getText() != null) {
						double tempo = Double.parseDouble(tftempo.getText().replace(",", "."));
						total = tempo * custo;
					} else {
						tftotal.setText("Calculando...");
					}

					tftotal.setText(String.format("%.2f", total));

				} catch (Exception e) {
					if (tfCusto.getText().length() == 0) {
						tftotal.setText("");
					} else {
						tftotal.setText("Calculando...");
					}

				}

			}
		});

		tftempo.getDocument().addDocumentListener(new DocumentListener() {
			public void changedUpdate(DocumentEvent e) {
				warn();
			}

			public void removeUpdate(DocumentEvent e) {
				warn();
			}

			public void insertUpdate(DocumentEvent e) {
				warn();
			}

			public void warn() {

				try {
					double custo = Double.parseDouble(tfCusto.getText().replace(",", "."));
					double total = 0d;
					if (tftempo.getText() != null) {
						double tempo = Double.parseDouble(tftempo.getText().replace(",", "."));
						total = tempo * custo;
					} else {
						tftotal.setText("Calculando...");
					}

					tftotal.setText(String.format("%.2f", total));

				} catch (Exception e) {
					if (tfCusto.getText().length() == 0) {
						tftotal.setText("");
					} else {
						tftotal.setText("Calculando...");
					}

				}

			}
		});
	}

	private void preencheTabela() {
		int totLinhas = tableModel.getRowCount();
		if (tableModel.getRowCount() > 0) {
			for (int i = 0; i < totLinhas; i++) {
				tableModel.removeRow(0);
			}
		}
		for (Manutencao p : ManutencaoProcessa.manutencoes) {
			tableModel.addRow(new String[] { String.format("%d", p.getId()), p.getData(), p.getEquipamento(),
					String.format("%.2f", p.getCustoHora()), String.format("%.2f", p.getTempoGasto()),
					String.format("%.2f", p.getTotal()) });
		}
	}

	private void limparCampos() {
		tfID.setText("");
		tfData.setText("");
		tfCusto.setText("");
		tftempo.setText("");
	}

	private void create() {

		// o IF esta vendo se tem algum campo não preenchido
		if (tfID.getText().length() != 0 && tfData.getText().length() != 0 && tfCusto.getText().length() != 0
				&& tftempo.getText().length() != 0 && tftotal.getText().length() != 0) {

			ManutencaoProcessa.manutencoes.add(new Manutencao(Integer.parseInt(tfID.getText()), tfData.getText(),
					cbEquipamento.getSelectedItem().toString(), Double.parseDouble(tfCusto.getText()),
					Double.parseDouble(tftempo.getText())));

			preencheTabela();
			limparCampos();
			ManutencaoProcessa.salvar();

		} else {
			JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
		}
	}

	private void read() {
		String text = JOptionPane.showInputDialog(this, "Digite o id do item");
		try {
			int id = Integer.parseInt(text);

			for (Manutencao m : ManutencaoProcessa.manutencoes) {
				if (m.getId() == id) {
					int indice = ManutencaoProcessa.manutencoes.indexOf(m);
					tfID.setText(String.format("%d", ManutencaoProcessa.manutencoes.get(indice).getId()));
					tfData.setText(ManutencaoProcessa.manutencoes.get(indice).getData());
					cbEquipamento.setSelectedItem(ManutencaoProcessa.manutencoes.get(indice).getEquipamento());
					tfCusto.setText((String.format("%.2f", ManutencaoProcessa.manutencoes.get(indice).getCustoHora())));
					tftempo.setText(
							(String.format("%.2f", ManutencaoProcessa.manutencoes.get(indice).getTempoGasto())));
					create.setEnabled(false);
					update.setEnabled(true);
					delete.setEnabled(true);
					ManutencaoProcessa.salvar();
				} else {
					JOptionPane.showMessageDialog(this, "Id inválido!", "Erro", JOptionPane.ERROR_MESSAGE);
				}
			}
		} catch (Exception e) {
			JOptionPane.showMessageDialog(this, "Id inválido!", "Erro", JOptionPane.ERROR_MESSAGE);
		}

	}

	private void alterar() {
		if (tfCusto.getText().length() != 0 && tftempo.getText().length() != 0) {
			int id = Integer.parseInt(tfID.getText());
			Manutencao m;
			for (Manutencao manutencao : ManutencaoProcessa.manutencoes) {
				if (id == manutencao.getId()) {
					m = manutencao;
					indice = ManutencaoProcessa.manutencoes.indexOf(m);
				}
			}
			ManutencaoProcessa.manutencoes.set(indice,
					new Manutencao(Integer.parseInt(tfID.getText()), tfData.getText(),
							cbEquipamento.getSelectedItem().toString(),
							(Double.parseDouble(tfCusto.getText().replace(",", "."))),
							(Double.parseDouble(tftempo.getText().replace(",", ".")))));

			preencheTabela();
			limparCampos();
			ManutencaoProcessa.salvar();
		} else {
			JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
		}
	}

	private void excluir() {

		int id = Integer.parseInt(tfID.getText());
		Manutencao m;
		for (Manutencao manutencao : ManutencaoProcessa.manutencoes) {
			if (id == manutencao.getId()) {
				m = manutencao;
				indice = ManutencaoProcessa.manutencoes.indexOf(m);
			}
		}
		ManutencaoProcessa.manutencoes.remove(indice);
		preencheTabela();
		limparCampos();
		create.setEnabled(true);
		update.setEnabled(false);
		delete.setEnabled(false);
		ManutencaoProcessa.salvar();
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == create) {
			create();
		}
		if (e.getSource() == read) {
			read();
		}
		if (e.getSource() == update) {
			alterar();
		}
		if (e.getSource() == delete) {
			excluir();
		}
	}

	public static void main(String[] args) {
		ManutencaoProcessa.carregar();
		FormManutencoes login = new FormManutencoes();
		login.setVisible(true);
	}
}
