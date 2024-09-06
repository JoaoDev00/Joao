//`String nomeUsuario = "William";`
// `int idadeUsuario = 22;`
// `double alturaUsuario = 1.82;`
// `boolean falaIngles = true;`
// `char conceitoProva = 'A';`
// `System.out.print();` -> Exibe o resultado sem quebrar linha;
// `System.out.println();` -> Exibe o resultado com quebra de linha no final;
// `System.out.printf();` -> Exibe o resultando interpolando.
                                                                                    





import java.util.Locale;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        String produto1 = "Computador";
        String produto2 = "Mesa de escritorio";
        
        byte idade = 30;
        int preco = 2100;
        int codigo = 5290;
        char genero = 'F';
       
        double preco1 = 2100.0;
        double preco2 = 650.50;
        double medida = 53.234567;

        System.out.println(produto1 + " o preço é de " + preco1);
        System.out.println(produto2 + " o preço é de " + preco2);

        System.out.print("Registro: ");
        System.out.println("30 anos, código: " + codigo + ", e gênero: " + genero);

        Locale locale = new Locale("en", "US");
        System.out.printf(locale, "Medida com oito casas após a vírgula: %.8f%n", medida);
        System.out.printf(locale, "Medida arredondada com três casas decimais: %.3f%n", medida);
        System.out.printf(locale, "Medida com ponto flutuante padrão US: %f%n", medida);
    }
}


// System.out.printf("O nome do usuário é " + nomeUsuario + ", a idade dele é: " + idadeUsuario + "e ele tem altura de: " + alturaUsuario + ".Ele fala inglês? " + falaIngles);
        
// System.out.printf("O nome do usuário é %s, a idade dele é: %d e ele tem altura de: %.2f. Ele fala inglês? %b", nomeUsuario, idadeUsuario, alturaUsuario, falaIngles);



