package modelo;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.util.Currency;
import java.util.Locale;
import java.util.Objects;

public class Orcamento {

	// Atributos
	private int id;
	private String fornecedor;
	private String produto;
	private double preco;
	private boolean maisBarato;

	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");

	// Construtores
	public Orcamento(int id, String fornecedor, String produto, double preco, boolean maisBarato) {
		this.id = id;
		this.fornecedor = fornecedor;
		this.produto = produto;
		this.preco = preco;
		this.maisBarato = maisBarato;
	}

	public Orcamento(String linha) throws ParseException {
		df.setCurrency(Currency.getInstance(BRASIL));

		this.id = Integer.parseInt(linha.split(";")[0]);
		this.fornecedor = linha.split(";")[1];
		this.produto = linha.split(";")[2];
		this.preco = Double.parseDouble(linha.split(";")[3].replace(",", "."));
		this.maisBarato = Boolean.parseBoolean(linha.split(";")[4]);
	}

	// M�todos de acesso (Getters && Setters)

	public Orcamento(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(String fornecedor) {
		this.fornecedor = fornecedor;
	}

	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public boolean isMaisBarato() {
		return maisBarato;
	}

	public void setMaisBarato(boolean maisBarato) {
		this.maisBarato =  maisBarato;
		
		
	}

	@Override
	public int hashCode() {
		return Objects.hash(fornecedor, id, maisBarato, preco, produto);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Orcamento other = (Orcamento) obj;
		return Objects.equals(BRASIL, other.BRASIL) && Objects.equals(df, other.df)
				&& Objects.equals(fornecedor, other.fornecedor) && id == other.id && maisBarato == other.maisBarato
				&& Double.doubleToLongBits(preco) == Double.doubleToLongBits(other.preco)
				&& Objects.equals(produto, other.produto);
	}

	@Override
	public String toString() {
		return id + ";" + fornecedor + ";" + produto + ";" + preco + ";" + maisBarato;
	}

	public String toCSV() {
		return id + ";" + fornecedor + ";" + produto + ";" + preco + ";" + maisBarato + "\r\n";
	}

}
