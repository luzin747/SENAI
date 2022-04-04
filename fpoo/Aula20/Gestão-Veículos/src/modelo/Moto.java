package modelo;

public class Moto extends Veiculo{

	private int cilindradas;

	public int getCilindradas() {
		return cilindradas;
	}

	public void setCilindradas(int cilindradas) {
		this.cilindradas = cilindradas;
	}
	
	public void Moto() {
		
	}

	public Moto(int cilindradas, int anoModelo, int anoFabricacao, String modelo, String marca, double valor,
			String placa) {

		this.cilindradas = cilindradas;
		this.setAnoFabricacao(anoFabricacao);
		this.setAnoModelo(anoModelo);
		this.setMarca(marca);
		this.setModelo(modelo);
		this.setPlaca(placa);
		this.setValor(valor);
	}

	@Override
	public String toString() {
		return "Moto [cilindradas=" + cilindradas + ", getCilindradas()=" + getCilindradas() + "]";
	}
}
