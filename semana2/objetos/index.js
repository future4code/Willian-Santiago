// Exercicio de interpretação
// O teste realizado é querendo saber se o numero digitado e dividido é um resultado Inteiro
// Se for numero parent, passou se não, não passou
// Numeros pares

// Para saber se tem a fruta e o preço
// preco = 2.25
// Seria impresso o valor de pera com o de default

// Comparando se um numero é maior que o outro
// Seria igual e passaria
// Não haveria erro se fosse o numero 10, pq o resultado seria 0


// const idadeDoUsuario = (aIdade) =>{
//     if (aIdade >= 18){
//         console.log("Ele pode dirigir")
//     } else {
//         console.log("Não pode digirir")
//     }
// }
// const idade = Number(prompt("Qual sua idade? "))
// idadeDoUsuario(idade)

// const horarioDeTrabalho = (dia, tarde, noite) =>{
//     if (horaDetrabalho === "M" ){
//         console.log("Bom dia")
//     } else if (horaDetrabalho === "V"){
//         console.log("Boa tarde")
//     } else if (horaDetrabalho === "N"){
//         console.log("Boa noite")
//     }

// }
// const horaDetrabalho = prompt("Digite  M (matutino) ou V (Vespertino) ou N (Noturno)")
// horarioDeTrabalho(horaDetrabalho)

// let horarioTrabalho = (horaDetrabalho) => {
// switch (horaDetrabalho) {
//     case "M":
//      console.log("Bom dia");
//   break;
//   case "V":
//     console.log("Boa tarde");
//     break
//   case "N":
//     console.log("Boa noite");
//     break
//     default:
//         console.log("A resposta tem que ser M, V ou N")
//         break;
// }
// }
// const seuHorarioDeTrabalho = prompt("Digite  M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()
// horarioTrabalho(seuHorarioDeTrabalho)


const genero = prompt("Qual o genero do filme? ").toUpperCase()
const valor = Number(prompt("Qual o valor do ingresso? "))
    if(genero === "ficcao" && valor <= 15){
        console.log("Bom filme")
    }else{
        console.log("Escolha outro filme")
    }
