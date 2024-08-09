// 1. Uma empresa de tecnologia contratou você para realizar um pequeno
// script, que exibirá na tela uma contagem regressiva de dez até zero.

// 2.  Criar um script na qual a saída dele é a tabuada de multiplicação de 5
// (utilizar o comando FOR). Exemplo de saída: 5x1 = 5 5x2 = 10 5x3 = 15
// 5x4 = 20 5x5 = 25 5x6 = 30 5x7 = 35 5x8 = 40 5x9 = 45 5x10 = 50


// for (let i = 1, i <= 10; i++ ){
//     console.log("5x"){i} = 
// }
// --------------------------------------------------------------------------------------

// A pizzaria sabores está com novos sabores. 
// Para isso, você recebeu a tarefa de criar um loop que exiba todas as pizzas disponíveis:

// "Mussarela", "Calabresa", "Frango com Catupiry", "Marguerita", "Portuguesa"

// Versão alternativa

// let sabores = ["Mussarela", "Calabresa", "Frango com Catupiry", "Marguerita", "Portuguesa"]
// console.log("Sabores disponíveis: ");

// //for
// for(let i = 0; i < sabores.length; i++) {
//     console.log(`${i + 1}. ${sabores[i]}`);
// }

// //while
// let i = 0;
// while(i < sabores.length) {
//     console.log(`${i + 1}. ${sabores[i]}`);
//     i++;
// }
// ```

// --------------------------------------------------------------------------------------

// const pizza = ["Mussarela", "Calabresa", "Frango com Catupiry", "Marguerita", "Portuguesa"];
// let i, len, text;
// for (i = 0, len = pizza.length, text = ""; i < len; i++) {
//   text += pizza[i] + " ";
//   console.log(text);
// }

// --------------------------------------------------------------------------------------

// Estamos fechando mais um dia de trabalho na pizzaria Sabores. Para isso, 
// será necessário que você construa um array que guarde as quantidades de pizzas que foram vendidas no dia e no final exiba o total de pizzas.
// [10, 15, 8, 20, 12]
// total = 65

// let vendas = [10, 15, 8, 20, 12];
// let totalVendas = 0;
// for(let i = 0; i < vendas.length; i++) {
//     // totalVendas = totalVendas + vendas[i];
//     totalVendas += vendas[i];
// }
// console.log(`Total de pizzas vendidas: ${totalVendas}`);



// --------------------------------------------------------------------------------------




// As nossas pizzas deverão ser entreguem em até 30 minutos apartir do momento do pedido.
//  Para isso, construa um loop que vai realizar uma contagem regressiva a cada minuto de 30 minutos até a entrega da pizza:

// let i = 30
// console.log("Tempo de entrega estimado: ");
// while(i > 0){
//     console.log("${i} minutos restantes");
//     i --; 
// }
// console.log("A pizza chegou");

// --------------------------------------------------------------------------------------







// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// let i = 1;
// while (i <= 20) {
//     console.log("Mastiga de n ${i} realizada. ");
// }