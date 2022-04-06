package modelo;

public class Vendas {

	private int codCliente;
	private int codFunc;
	private double valor;
	
	
	
	
	public void Vendas() {
		
	}
	
	public Vendas(int codCliente,int codFunc,double valor) {
		this.codCliente = codCliente;
		this.codFunc = codFunc;
		this.valor = valor;
	}

	public int getCodFunc() {
		return codFunc;
	}

	public void setCodFunc(int codFunc) {
		this.codFunc = codFunc;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	@Override
	public String toString() {
		return "\nVendas Código Cliente: " + codCliente + "\nCódigo Funcinário: " + codFunc + "\nValor: " + valor + " ";
	}
	
	
}
