package visao;

import java.util.ArrayList;
import java.util.Scanner;

import modelo.Funcionario;
import modelo.Cliente;
import modelo.Vendas;

public class Menu {

	private static Scanner entrada = new Scanner(System.in);
	private static ArrayList<Funcionario> funcionarios = new ArrayList<>();
	private static ArrayList<Cliente> clientes = new ArrayList<>();
	private static ArrayList<Vendas> vendas = new ArrayList<>();

	public static void main(String[] args) {

		int menu = 0;

		while (menu != 7) {
			System.out.println("******************* Escolha uma Op��o *******************");
			System.out.println(
					"\n1.Cadastrar Funcion�rio \n2.Cadastrar Cliente \n3.Listar Funcin�rio  \n4.Listar Cliente  \n5.Cadastrar Vendas \n6.Listar Vendas \n7.Sair!");
			menu = entrada.nextInt();

			switch (menu) {
			case 1:
				cadastrarFuncionario();
				break;
			case 2:
				cadastrarCliente();
				break;
			case 3:
				listarFuncionario();
				break;
			case 4:
				litarCliente();
				break;
			case 5:
				cadastrarVendas();
				break;
			case 6:
				listarVendas();
				break;

			case 7:
				System.out.println("Saiu do Programa");
				break;

			default:
				System.out.println("Op��o Inv�lida");
				break;

			}
		}
	}

	private static void listarVendas() {
		for (Vendas vend : vendas) {
			System.out.println(vend.toString());
		}

	}

	private static void cadastrarVendas() {
		System.out.println("*********** Cadastrar VENDAS ***********");
		System.out.println("\nC�digo Cliente: \tC�digo Funcion�rio:\tValor");
		Vendas venda = new Vendas(entrada.nextInt(), entrada.nextInt(), entrada.nextDouble());
		vendas.add(venda);

		System.out.println("\n\n-------------- [VENDAS CADASTRADAS] --------------");

		for (Funcionario funcionario : funcionarios) {
			if (funcionario.getMatricula() == venda.getCodFunc()) {
				System.out.println("Valor da comiss�o: " + funcionario.calcComissao(venda.getValor()));
			}
		}

	}

	private static void litarCliente() {
		for (Cliente clien : clientes) {
			System.out.println(clien.toString());
		}

	}

	private static void listarFuncionario() {
		for (Funcionario func : funcionarios) {
			System.out.println(func.toString());
		}

	}

	private static void cadastrarCliente() {
		System.out.println("*********** Cadastrar CLIENTE ***********");
		System.out.println("\nNome\tTelefone\tData de Nascimento\tID\tLimite de Cr�dito");
		Cliente cliente = new Cliente(entrada.next(), entrada.next(), entrada.next(), entrada.nextInt(),
				entrada.nextDouble());
		clientes.add(cliente);

		System.out.println("\n\n-------------- [CLIENTE CADASTRADO] --------------");

	}

	private static void cadastrarFuncionario() {
		System.out.println("*********** Cadastrar Funcion�rio ***********");
		System.out.println("\nNome\tTelefone\tData de Nascimento\tMatr�cula\tComiss�o");
		Funcionario funcionario = new Funcionario(entrada.next(), entrada.next(), entrada.next(), entrada.nextInt(),
				entrada.nextDouble());
		funcionarios.add(funcionario);

		System.out.println("\n\n-------------- [FUNCION�RIO CADASTRADO] --------------");

	}

}
