// let conta = {
//   saldo: 0,
//   historico: [],
//   saquesDiarios: 0
// };

// let opcao;

// while (true) {
//   console.log("Selecione uma opção:");
//   console.log("1. Depositar");
//   console.log("2. Sacar");
//   console.log("3. Extrato");
//   console.log("4. Sair");

//   opcao = prompt("Digite a opção: ");



// let saldo = 0;
// let depositos = [];
// let saques = [];
// let contadorSaques = 0;

// while (true) {
//   console.log("1. Depositar");
//   console.log("2. Sacar");
//   console.log("3. Extrato");
//   console.log("4. Sair");

//   let escolha = prompt("Escolha uma opção:");

//   switch (escolha) {
//     case "1":
//       let valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
//       if (valorDeposito > 0) {
//         saldo += valorDeposito;
//         depositos.push(`Depósito de R$ ${valorDeposito.toFixed(2)}`);
//         console.log(`Depósito realizado com sucesso! Saldo atual: R$ ${saldo.toFixed(2)}`);
//       } else {
//         console.log("Valor de depósito inválido.");
//       }
//       break;

//     case "2":
//       if (contadorSaques < 3) {
//         let valorSaque = parseFloat(prompt("Digite o valor do saque:"));
//         if (valorSaque > 0 && valorSaque <= 500) {
//           if (saldo >= valorSaque) {
//             saldo -= valorSaque;
//             saques.push(`Saque de R$ ${valorSaque.toFixed(2)}`);
//             contadorSaques++;
//             console.log(`Saque realizado com sucesso! Saldo atual: R$ ${saldo.toFixed(2)}`);
//           } else {
//             console.log("Saldo insuficiente.");
//           }
//         } else {
//           console.log("Valor de saque inválido.");
//         }
//       } else {
//         console.log("Limite de saques diários alcançado.");
//       }
//       break;

//     case "3":
//       if (depositos.length === 0 && saques.length === 0) {
//         console.log("Não foram realizadas movimentações.");
//       } else {
//         console.log("Extrato:");
//         depositos.forEach((deposito) => console.log(deposito));
//         saques.forEach((saque) => console.log(saque));
//         console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
//       }
//       break;

//     case "4":
//       console.log("Saindo...");
//       return;

//     default:
//       console.log("Opção inválida.");
//   }
// }

