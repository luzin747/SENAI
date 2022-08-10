package uteis;

public class Cripto {
	
	//Método para criptografar a senha somando e subtraindo
	//os dois primeiros digitos aos demais

	public static String encripta(String senha) {
		//cria um vetor de caracteres para manipular a String
		char charArray[] = new char[senha.length()];
		
		for(int i = 0; i < charArray.length; i++) {
			charArray[i] = senha.charAt(i); // Passa cada caracter da String para o vetor.
			//se a Soma caracter + primeiro digito for menor do que
			// o tamanho tabela ASCII (256) soma,senão subtrai.
			
			if(charArray[i] + charArray[0] < 255) {
				charArray[i] += charArray[0];
			}else {
				charArray[i] -= charArray[0];
			}
			
		}
		for (int i = 0; i < charArray.length; i++) {
			//Se a soma caracter + segundo dígito for menor do que 
			//o tamanho da tablea ASCII (256) soma, senão subtrai.
			if(charArray[i] + charArray[1] < 255) {
				charArray[i] += charArray[1];
			}else {
				charArray[i] -= charArray[1];
			}
		}
		//Retorna o vetor de caracteres para a String
		senha = new String(charArray);
		return senha;
	}

}
