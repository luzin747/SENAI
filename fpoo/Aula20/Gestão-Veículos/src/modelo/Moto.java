package modelo;

public class Moto extends Veiculo {

	private int cilindradas;

	public int getCilindradas() {
		return cilindradas;
	}

	public void setCilindradas(int cilindradas) {
		this.cilindradas = cilindradas;
	}

	public void Moto() {

	}

	public Moto(int anoModelo, int anoFabricacao, String modelo, String marca, double valor, String placa,
			int cilindradas) {
		super(anoModelo, anoFabricacao, modelo, marca, valor, placa);
		this.cilindradas = cilindradas;

	}

	@Override
	public String toString() {
		return "Moto \nCilindradas: " + getCilindradas() + super.toString();
	}
}
