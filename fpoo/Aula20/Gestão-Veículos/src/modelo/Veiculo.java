package modelo;

public class Veiculo {

	private int anoModelo;
	private int anoFabricacao;
	private String modelo;
	private String marca;
	private double valor;
	private String placa;

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public int getAnoModelo() {
		return anoModelo;
	}

	public void setAnoModelo(int anoModelo) {
		this.anoModelo = anoModelo;
	}

	public int getAnoFabricacao() {
		return anoFabricacao;
	}

	public void setAnoFabricacao(int anoFabricacao) {
		this.anoFabricacao = anoFabricacao;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	@Override
	public String toString() {
		return "Veiculo [anoModelo=" + anoModelo + ", anoFabricacao=" + anoFabricacao + ", modelo=" + modelo
				+ ", marca=" + marca + ", valor=" + valor + ", placa=" + placa + ", getPlaca()=" + getPlaca()
				+ ", getAnoModelo()=" + getAnoModelo() + ", getAnoFabricacao()=" + getAnoFabricacao() + ", getModelo()="
				+ getModelo() + ", getMarca()=" + getMarca() + ", getValor()=" + getValor() + "]";
	}
	
	

}
