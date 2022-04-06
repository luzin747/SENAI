package visao;

import java.util.ArrayList;
import java.util.Scanner;

import modelo.Veiculo;
import modelo.Carro;
import modelo.Moto;

public class Menu {

	private static Scanner entrada = new Scanner(System.in);
	private static ArrayList<Veiculo> veiculos = new ArrayList<>();
	private static ArrayList<Carro> carros = new ArrayList<>();
	private static ArrayList<Moto> motos = new ArrayList<>();

	public static void main(String[] args) {

		int menu = 0;

		while (menu != 5) {
			System.out.println("******************* Escolha uma Opção *******************");
			System.out.println("1.Cadastrar Moto \n2.Cadastrar Carro \n3.Listar Moto  \n4.Listar Carro \n5.Sair!");
			menu = entrada.nextInt();

			switch (menu) {
			case 1:
				cadastrarMoto();
				break;
			case 2:
				cadastrarCarro();
				break;
			case 3:
				listarMoto();
				break;
			case 4:
				listarCarro();
				break;
			case 5:
				System.out.println("Saiu do Programa");
				break;

			default:
				System.out.println("Opção Inválida");
				break;

			}
		}
	}

	private static void listarMoto() {
		for (Moto mot : motos) {
			System.out.println(mot.toString());
		}

	}

	private static void listarCarro() {
		for (Carro car : carros) {
			System.out.println(car.toString());
		}

	}

	private static void cadastrarCarro() {
		System.out.println("*********** Cadastrar Carrito ***********");
		System.out.println("\nTipo:\tPassageiros:\tAno Modelo\tAno Fabricação\tModelo\tMarca\tValor\tPlaca");
		Carro carro = new Carro(entrada.next(), entrada.nextInt(), entrada.nextInt(), entrada.nextInt(), entrada.next(),
				entrada.next(), entrada.nextDouble(), entrada.next());
		carros.add(carro);
		System.out.println("\n\n-------------- [Carro Cadastrado] --------------");

	}

	private static void cadastrarMoto() {
		System.out.println("*********** Cadastrar Moto ***********");
		System.out.println("\nAno Modelo:\tAno Fabricação:\tModelo\tMarca\tValor\tPlaca\tCilindradas");
		Moto moto = new Moto(entrada.nextInt(), entrada.nextInt(), entrada.next(), entrada.next(), entrada.nextDouble(),
				entrada.next(), entrada.nextInt());
		motos.add(moto);

		System.out.println("\n\n-------------- [Moto Cadastrada vrum vrum] --------------");

	}

}
