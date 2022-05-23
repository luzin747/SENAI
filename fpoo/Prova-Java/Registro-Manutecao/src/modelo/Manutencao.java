package modelo;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.util.Currency;
import java.util.Locale;
import java.util.Objects;

public class Manutencao {

	// Atributos
	private int id;
	private String Data;
	private String equipamento; 
	private double custoHora;
	private double tempoGasto;
	
	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");

	// Construtores
	public Manutencao(int id, String Data, String equipamento, double custoHora, double tempoGasto) {
		this.id = id;
		this.Data = Data;
		this.equipamento = equipamento;
		this.custoHora = custoHora;
		this.tempoGasto = tempoGasto;
	}

	public Manutencao(String linha) throws ParseException{
		df.setCurrency(Currency.getInstance(BRASIL));
		
		this.id = Integer.parseInt(linha.split(";")[0]);
		this.Data = linha.split(";")[1];
		this.equipamento = linha.split(";")[2];
		this.custoHora = Double.parseDouble(linha.split(";")[3].replace(",", "."));
		this.tempoGasto = Double.parseDouble(linha.split(";")[4].replace(":", "."));
	}

	// M�todos de acesso (Getters && Setters)
	

	public Manutencao(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getData() {
		return Data;
	}

	public void setData(String data) {
		Data = data;
	}

	public String getEquipamento() {
		return equipamento;
	}

	public void setEquipamento(String equipamento) {
		this.equipamento = equipamento;
	}

	public double getCustoHora() {
		return custoHora;
	}

	public void setCustoHora(double custoHora) {
		this.custoHora = custoHora;
	}

	public double getTempoGasto() {
		return tempoGasto;
	}

	public void setTempoGasto(double tempoGasto) {
		this.tempoGasto = tempoGasto;
	}

	@Override
	public int hashCode() {
		return Objects.hash(BRASIL, Data, custoHora, df, equipamento, id, tempoGasto);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Manutencao other = (Manutencao) obj;
		return Objects.equals(BRASIL, other.BRASIL) && Objects.equals(Data, other.Data)
				&& Double.doubleToLongBits(custoHora) == Double.doubleToLongBits(other.custoHora)
				&& Objects.equals(df, other.df) && Objects.equals(equipamento, other.equipamento) && id == other.id
				&& Double.doubleToLongBits(tempoGasto) == Double.doubleToLongBits(other.tempoGasto);
	}
	
	public double getTotal() {
		return custoHora * tempoGasto;
	}

	@Override
	public String toString() {
		return id + ";" + Data + ";" + equipamento + ";" +custoHora + ";"+ tempoGasto ;
	}
	public String toCSV() {
		return id + ";" + Data + ";" + equipamento + ";" +custoHora + ";"+ tempoGasto ;
	}
	
	
	
}
