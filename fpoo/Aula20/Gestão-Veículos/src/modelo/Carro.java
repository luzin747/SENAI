package modelo;

public class Carro extends Veiculo {

	private String tipo;
	private int passageiros;

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public int getPassageiros() {
		return passageiros;
	}

	public void setPassageiros(int passageiros) {
		this.passageiros = passageiros;
	}

	public void Carro() {

	}

	public Carro(String tipo, int passageiros, int anoModelo, int anoFabricacao, String modelo, String marca,
			double valor, String placa) {

		this.tipo = tipo;
		this.passageiros = passageiros;
		this.setAnoFabricacao(anoFabricacao);
		this.setAnoModelo(anoModelo);
		this.setMarca(marca);
		this.setModelo(modelo);
		this.setPlaca(placa);
		this.setValor(valor);
	}

	@Override
	public String toString() {
		return "Carro [tipo=" + tipo + ", passageiros=" + passageiros + ", getTipo()=" + getTipo()
				+ ", getPassageiros()=" + getPassageiros() + "]";
	}

}
