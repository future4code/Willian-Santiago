/*Exercício 1

let numero = Number(prompt("Digite um número. Digite 0 para encerrar."));
let soma = 0;

while(numero !== 0){
    console.log("Você digitou o número "+numero);
    soma = soma + numero;
    console.log("Somamos " + numero + " ao nosso valor total atual, que é de " +soma)
    numero = Number(prompt("Digite um número. Digite 0 para encerrar.")); 
}

console.log("A soma deu "+soma);

*/

//Exercício 2
/*
const numeros = [11, 15, 18, 14, 12, 13];
const maisNumeros = [11, 15, 18, 14, 9001];

function devolveMaior(arr){

    let maior = 0;

    for(let i = 0; i < arr.length; i++){
        let numero = arr[i]

        if(numero > maior){
            maior = numero;
        }
    }

    return `O maior número é ${maior}`;
}

const maiorNumeroDoArrayNumeros = devolveMaior(numeros);
const maiorNumeroDoArrayMaisNumeros = devolveMaior(maisNumeros);

console.log(maiorNumeroDoArrayNumeros);
console.log(maiorNumeroDoArrayMaisNumeros);*/

//Exercício 3

// const palavras = ["Oi", "sumido,", "tudo bem?", "Saudades", "rs", "😘"];
// let frase = "";
// for(let palavra of palavras){
//     //corpo do laço
//     frase+=palavra+" "
//     //frase  = frase + palavra
// }

//console.log(frase);




/* LOOP INFINITO ABAIXO. PROCEDA COM CUIDADO
for(let i = 0; 0 === 0; i++){
    console.log("cuidado, meu amigo");
}

*/