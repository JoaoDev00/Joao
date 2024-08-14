// let name = "João"
// let deposito = parseFloat (prompt("Digite um numero:  ")) ;
// let saque = parseFloat (prompt("Digite um numero:  " )) ;

// 3 operações: depósito, saque e extrato.

const limiteSaques = 3;

let saldo = 0;
let extrato = "";
let limite = 500;
let numeroSaques = 0;

while (true) {
    menu = prompt(`
        ============================
        [d] - Depósito
        [s] - Saque
        [e] - Extrato
        [q] - Sair
        ============================
        `);

    if (menu == "d") {
        valor = parseFloat(prompt("Informe o valor do depósito: R$"));
        if (valor > 0) {
            saldo += valor
            extrato += `Depósito de R$${valor} \n`;
            console.log(`Depósito de R$${valor} realizado.`);
        } else {
            console.log("Operação falhou! O valor informado é inválido!")
        }

    }
    else if (menu == "s") {
        valor = parseFloat(prompt("Informe o valor do saque: R$"));
        excedeuSaldo = valor > saldo;
        excedeuLimite = valor > limite;
        excedeuSaque = numeroSaques >= limiteSaques;
        if (excedeuSaldo) {
            console.log("Operação falhou! Você não tem saldo suficiente!");
        } else if (excedeuLimite) {
            console.log("Operação falhou! O valor do saque excede o limite!");
        } else if (excedeuSaque) {
            console.log("Operação falhou! Número máximo de saques excedido!");
        } else if (valor > 0) {
            saldo -= valor;
            extrato += `Saque de R$${valor} \n`;
            console.log(`Saque de R$${valor} relizado`);
            numeroSaques++; // numeroSaques = numeroSaques + 1;
        } else {
            console.log("Operação falhou! O valor informado é inválido!")
        }


    }
    else if (menu == "e") {
        if (extrato == "e") {
            console.log("Não foram realizadas movimentações");
        } else {
             console.log(extrato);
        }
    // mensagem = extrato == true

        // condição logica? "Se for true" : se for false


    } else if (menu == "q") {
        console.log("Obrigado pela preferência !!!");
        break
    }
    else {
        console.log("Opção Inválida, por favor selecione novamente a operação desejada.");
    }

}



// Operação de depósito
// 1. Deve ser possível depositar valores positivos
// 2. Todos os depósitos devem ser armazenados em uma variável e exibidos na operação de extrato.

// Operação de saque
// 1. O sistema deve permitir realizar 3 saques diários
// 2. com limite máximo de R$ 500,00 por saque.
// 3. Caso o usuário não tenha saldo em conta, o sistema deve exibir uma mensagem informando que não será possível sacar o dinheiro por falta de saldo.
// 4. Todos os saques devem ser armazenados em uma variável e exibidos na operação de extrato.

// Operação de extrato
// 1. Essa operação deve listar todos os depósitos e saques realizados na conta.
// 2. No fim da listagem deve ser exibido o saldo atual da conta.
// 3. Se o extrato estiver em branco, exibir a mensagem: Não foram realizadas movimentações.
// 4. Os valores devem ser exibidos utilizando o formato R$ xxx.xx, exemplo:
// R$ 1500.45


// let banco = ["extrato 1 : ", extrato , "extrato 2: ",extrato, "extrato 3 : ", extrato];
// let contador = 0 ;
// while (contador < sabores.banco) {
//     console.log(banco[contador]);
//     contador =  contador + 1 ;
// }


// function sacar(valor) {
//     if (conta.saldo >= valor) {
//       if (conta.saquesDiarios < 3 && valor <= 500) {
//         conta.saldo -= valor;
//         conta.historico.push(`Saque de R$ ${valor}`);
//         conta.saquesDiarios++;
//         console.log(`Saque de R$ ${valor} realizado com sucesso!`);
//       } else if (conta.saquesDiarios >= 3) {
//         console.log("Você já realizou 3 saques diários. Não é possível realizar mais saques hoje.");
//       } else {
//         console.log("O valor do saque é maior que o limite diário de R$ 500,00.");
//       }
//     } else {
//       console.log("Saldo insuficiente para realizar o saque!");
//     }
//   }


              // valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                // if (valorSaque <= 500 && valorSaque <= saldo) {
                //     saldo >= valorSaque;
                //     exceudeuLimite = valor
                // }