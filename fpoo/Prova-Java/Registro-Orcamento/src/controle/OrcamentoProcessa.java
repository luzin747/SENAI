package controle;

import java.util.ArrayList;

import modelo.Orcamento;

public class OrcamentoProcessa {

	public static ArrayList<Orcamento> orcamentos = new ArrayList<>();
	private static OrcamentoDAO od = new OrcamentoDAO();

	public static void carregar() {
		orcamentos = od.ler();
	}

	public static void salvar() {
		od.escrever(orcamentos);
	}

	public static void compararProdutos(String produto) {
		int indexBarato = 0;
		double precoBarato = 9999999;
		for (Orcamento orcamento : orcamentos) {
			if (orcamento.getProduto() == produto && orcamento.getPreco() < precoBarato) {
				indexBarato = orcamentos.indexOf(orcamento);
				precoBarato = orcamento.getPreco();
			}
		}

		for (Orcamento orcamento : orcamentos) {
			if (orcamentos.indexOf(orcamento) == indexBarato) {
				orcamento.setMaisBarato(true);
			} else if (orcamento.getProduto() == produto) {
				orcamento.setMaisBarato(false);
			}
		}

	}

}
