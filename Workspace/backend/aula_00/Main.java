import java.util.Locale;

public class Main {
    

    public static void main (String[] args){

        Locale.setDefault(Locale.US);
        
    
        // String nomeUsario = "William"
        // int idadeUsuario = 22 ;
        // double alturaUsario = 1.82;
        // boolean falaIngles = true;
        // char conceitoProva = "A" ; 
        System.out.println("Hello world! ");
        System.out.print("Hello World ! ");
        System.out.printf("Hello World!");
     
        System.out.printf("O nome do usuário é "+ nomeUsario + "e ele tem altura de: "+ alturaUsario + ". Ele fala inglês?" + falaIngles );
        System.out.printf( "O nome do usuário é %s, a idade dele é: %d e ele tem altura de: %f. Ele fala ingles? %b", );

    }

}