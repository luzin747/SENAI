package modelo;

public class Veiculo {

	private int anoModelo;
	private int anoFabricacao;
	private String modelo;
	private String marca;
	private double valor;
	private String placa;
	
	
	public Veiculo(){
		
	}
	
	public Veiculo(int anoModelo,int anoFabricacao,String modelo,String marca,double valor,String placa) {
		this.anoFabricacao = anoFabricacao;
		this.anoModelo = anoModelo;
		this.marca = marca;
		this.modelo = modelo;
		this.placa = placa;
		this.valor = valor;
	}

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
		return "\nPlaca: " + getPlaca()
				+ "\nAno Modelo: " + getAnoModelo() + "\nAno Fabricacao: " + getAnoFabricacao() + "\nModelo: "
				+ getModelo() + "\nMarca: " + getMarca() + "\nValor: " + getValor() + " ";
	}
	
	

}
