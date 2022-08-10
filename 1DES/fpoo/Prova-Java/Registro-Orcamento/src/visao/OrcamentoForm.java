package visao;

import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import controle.OrcamentoProcessa;
import modelo.Orcamento;

public class OrcamentoForm extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private JLabel title, linha, lbID, lbFornecedor, lbProduto, lbPreco;
	private JTextField tfID, tfFornecedor, tfPreco;
	private JComboBox<String> cbProduto;
	private JButton create, read, update, delete;
	private JScrollPane scroll;
	private JTable table;
	private DefaultTableModel tableModel;
	private int indice = -1;

	OrcamentoForm() { 

		// Propriedades B�sicas
		setTitle("Registros de Orçamentos");
		setBounds(800, 250, 670, 520);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel(); // Painel de elementos
		setContentPane(painel); // Configua o painel
		setLayout(null);

		title = new JLabel("Registro de Orçamentos");
		title.setBounds(130, 20, 1000, 39);
		title.setFont(new Font("Arial", Font.BOLD, 35));

		painel.add(title);

		// Textos e Bot�es

		linha = new JLabel("_________________________________________________________");
		linha.setBounds(15, 39, 660, 30);
		linha.setFont(new Font("", Font.BOLD, 20));
		painel.add(linha);

		lbID = new JLabel("ID:");
		lbID.setBounds(100, 90, 100, 30);
		lbID.setFont(new Font("Arial", Font.BOLD, 20));
		painel.add(lbID);

		lbFornecedor = new JLabel("Fornecedor:");
		lbFornecedor.setBounds(50, 130, 200, 30);
		lbFornecedor.setFont(new Font("Arial", Font.BOLD, 20));
		painel.add(lbFornecedor);

		lbProduto = new JLabel("Produto:");
		lbProduto.setBounds(310, 90, 200, 30);
		lbProduto.setFont(new Font("Arial", Font.BOLD, 20));
		painel.add(lbProduto);

		lbPreco = new JLabel("Preco:");
		lbPreco.setBounds(320, 127, 200, 30);
		lbPreco.setFont(new Font("Arial", Font.BOLD, 20));
		painel.add(lbPreco);
		
		// Text Field

		tfID = new JTextField();
		tfID.setBounds(140, 90, 60, 30);
		tfID.setText(""+calcId());
		tfID.setEnabled(false);
		painel.add(tfID);

		tfFornecedor = new JTextField();
		tfFornecedor.setBounds(170, 130, 100, 30);
		painel.add(tfFornecedor);

		cbProduto = new JComboBox<String>(
				new String[] { "RTX 3090TI 8GB", "SSD Crucial 250GB", "Mémoria HiperX 8gb DD5", "Plastation 5", "Xbox One s", "Garrafa da Ana" });
		cbProduto.setBounds(400, 90, 146, 30);
		painel.add(cbProduto);

		tfPreco = new JTextField();
		tfPreco.setBounds(400, 128, 150, 30);
		painel.add(tfPreco);

		create = new JButton("Cadastrar");
		read = new JButton("Consultar");
		update = new JButton("Alterar");
		delete = new JButton("Excluir");

		create.setBounds(40, 180, 120, 30);
		read.setBounds(180, 180, 120, 30);
		update.setBounds(320, 180, 120, 30);
		delete.setBounds(460, 180, 120, 30);

		painel.add(create);
		painel.add(read);
		painel.add(update);
		painel.add(delete);

		// Tabela de Professores (READ, UPDATE)
		tableModel = new DefaultTableModel();
		tableModel.addColumn("ID");
		tableModel.addColumn("Fornecedor");
		tableModel.addColumn("Produto");
		tableModel.addColumn("Valor");
		tableModel.addColumn("Comprar");
		if (OrcamentoProcessa.orcamentos.size() != 0) {
			preencheTabela();
		}
		table = new JTable(tableModel);
		table.setEnabled(false);
		scroll = new JScrollPane(table);
		scroll.setBounds(20, 230, 605, 220);
		painel.add(scroll);

		create.addActionListener(this);
		read.addActionListener(this);
		update.addActionListener(this);
		delete.addActionListener(this);

		update.setEnabled(false);
		delete.setEnabled(false);
		
	}
	
	

	private void preencheTabela() {
		
		
		int totLinhas = tableModel.getRowCount();
		if (tableModel.getRowCount() > 0) {
			for (int i = 0; i < totLinhas; i++) {
				tableModel.removeRow(0);
			}
		}
		for (Orcamento o : OrcamentoProcessa.orcamentos) {
			if(o.isMaisBarato()) {
				tableModel.addRow(new String[] { String.format("%d", o.getId()), o.getFornecedor(), o.getProduto(),
						String.format("%.2f", o.getPreco()),"Dá Pra Comprar"});
			}else {
				tableModel.addRow(new String[] { String.format("%d", o.getId()), o.getFornecedor(), o.getProduto(),
						String.format("%.2f", o.getPreco()),"Não Compra"});
			}
			
		}
	}


	private void limparCampos() {
		tfID.setText("");
		tfFornecedor.setText("");
		tfPreco.setText("");
	}

	private void create() {

		// o IF esta vendo se tem algum campo não preenchido
		
		
			
			if (tfID.getText().length() != 0 && tfFornecedor.getText().length() != 0 && tfPreco.getText().length() != 0) {

				OrcamentoProcessa.orcamentos.add(new Orcamento(Integer.parseInt(tfID.getText()), tfFornecedor.getText(),
						cbProduto.getSelectedItem().toString(), Double.parseDouble(tfPreco.getText()), false));
				comprar();
				preencheTabela();
				limparCampos();
				OrcamentoProcessa.salvar();
				
				

			} else {
				JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
			}
		
		tfID.setText(""+calcId());
		
	}

	private void read() {
		String text = JOptionPane.showInputDialog(this, "Digite o id do item");
		try {
			int id = Integer.parseInt(text);

			boolean existe = false;
			for (Orcamento m : OrcamentoProcessa.orcamentos) {
				if (m.getId() == id) {
					int indice = OrcamentoProcessa.orcamentos.indexOf(m);
					tfID.setText(String.format("%d", OrcamentoProcessa.orcamentos.get(indice).getId()));
					tfFornecedor.setText(OrcamentoProcessa.orcamentos.get(indice).getFornecedor());
					cbProduto.setSelectedItem(OrcamentoProcessa.orcamentos.get(indice).getProduto());
					tfPreco.setText((String.format("%.2f", OrcamentoProcessa.orcamentos.get(indice).getPreco())));
					
					create.setEnabled(false);
					update.setEnabled(true);
					delete.setEnabled(true);
					comprar();
					
					OrcamentoProcessa.salvar();
					
				} 
			
			}
			if (existe) {
				JOptionPane.showMessageDialog(this, "Id inválido!", "Erro", JOptionPane.ERROR_MESSAGE);
			}
		} catch (Exception e) {
			JOptionPane.showMessageDialog(this, "Id inválido!", "Erro", JOptionPane.ERROR_MESSAGE);
		}
		

	}

	private void alterar() {
		if (tfFornecedor.getText().length() != 0 && tfPreco.getText().length() != 0) {
			int id = Integer.parseInt(tfID.getText());
			Orcamento m;
			for (Orcamento manutencao : OrcamentoProcessa.orcamentos) {
				if (id == manutencao.getId()) {
					m = manutencao;
					indice = OrcamentoProcessa.orcamentos.indexOf(m);
				}
			}
			OrcamentoProcessa.orcamentos.set(indice,
					new Orcamento(Integer.parseInt(tfID.getText()), tfFornecedor.getText(),
							cbProduto.getSelectedItem().toString(), Double.parseDouble(tfPreco.getText().replace(",", ".")), false));
							
			comprar();
			preencheTabela();
			limparCampos();
			create.setEnabled(true);
			update.setEnabled(false);
			delete.setEnabled(false);
			OrcamentoProcessa.salvar();
		} else {
			JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
		}
		
	}

	private void excluir() {

		int id = Integer.parseInt(tfID.getText());
		Orcamento m;
		for (Orcamento manutencao : OrcamentoProcessa.orcamentos) {
			if (id == manutencao.getId()) {
				m = manutencao;
				indice = OrcamentoProcessa.orcamentos.indexOf(m);
			}
		}
		OrcamentoProcessa.orcamentos.remove(indice);
		preencheTabela();
		limparCampos();
		create.setEnabled(true);
		update.setEnabled(false);
		delete.setEnabled(false);
		OrcamentoProcessa.salvar();
		comprar();
		
	}
	
	public void comprar() {
		for (Orcamento orcamento : OrcamentoProcessa.orcamentos) {
			OrcamentoProcessa.compararProdutos(orcamento.getProduto());
			}
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
	
//	public static void leitor(File path)throws IOException{
//		BufferedReader buffReade = new BufferedReader(new FileReader(path));
//		String linha = "";
//		StringBuilder sb;
//		int i = 1;
//		while(true) {
//			linha.buffRead.readLine();
//			
//		}
//	}

	public static int calcId() {
		return OrcamentoProcessa.orcamentos.get(OrcamentoProcessa.orcamentos.size()-1).getId()+1;
	}
	
	public static void main(String[] args) {
		OrcamentoProcessa.carregar();
		OrcamentoForm login = new OrcamentoForm();
		login.setVisible(true);
	}
}
