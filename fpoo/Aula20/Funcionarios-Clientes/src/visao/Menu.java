package visao;

import java.util.ArrayList;
import java.util.Scanner;

import modelo.Funcionario;
import modelo.Cliente;

public class Menu {

	private static Scanner entrada = new Scanner(System.in);
	private static ArrayList<Funcionario> funcionarios = new ArrayList<>();
	private static ArrayList<Cliente> clientes = new ArrayList<>();

	public static void main(String[] args) {

		int menu = 0;

		while (menu != 5) {
			System.out.println("******************* Escolha uma Opção *******************");
			System.out.println(
					"\n1.Cadastrar Funcionário \n2.Cadastrar Cliente \n3.Listar Funcinário  \n4.Listar Cliente  \n5.Cadastrar Vendas \n6.Listar Vendas 7.Sair!");
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

				break;
			case 6:

				break;

			case 7:
				System.out.println("Saiu do Programa");
				break;

			default:
				System.out.println("Opção Inválida");
				break;

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
		System.out.println("\nNome\tTelefone\tData de Nascimento\tID\tLimite de Crédito");
		Cliente cliente = new Cliente(entrada.next(), entrada.next(), entrada.next(), entrada.nextInt(),
				entrada.nextDouble());
		clientes.add(cliente);

		System.out.println("\n\n-------------- [CLIENTE CADASTRADO] --------------");

	}

	private static void cadastrarFuncionario() {
		System.out.println("*********** Cadastrar Funcionário ***********");
		System.out.println("\nNome\tTelefone\tData de Nascimento\tMatrícula\tComissão");
		Funcionario funcionario = new Funcionario(entrada.next(), entrada.next(), entrada.next(), entrada.nextInt(),
				entrada.nextDouble());
		funcionarios.add(funcionario);

		System.out.println("\n\n-------------- [FUNCIONÁRIO CADASTRADO] --------------");

	}

}