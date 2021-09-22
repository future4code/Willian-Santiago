// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01



function retornaTamanhoArray(array) {
    return array.length


}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    array.sort(function(a,b){
        return a - b
    })
    return array
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
 let numero = []
 for (let i = 0; i < array.length; i++){
     if(array[i] % 2 === 0)
     numero.push(array[i])
 }
 return numero
 
} 

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 return retornaNumerosPares(array).map(n => n ** 2)
 
}

// EXERCÍCIO 06

function retornaMaiorNumero(array) {
    let i = 0
    let maiorNumero = -Infinity
   while(i < array.length){
       if(array[i] > maiorNumero){
           maiorNumero = array[i]
       }
       i++
   } return maiorNumero


}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let [menor, maior] = retornaArrayOrdenado([num1, num2])
return {
    maiorNumero: maior,
    maiorDivisivelPorMenor: maior % menor === 0,
    diferenca: maior - menor
 }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const valor = []

    for (let i = 0; i < n; i++) {
       valor[i] = 2 * i
    }
 
    return valor

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if(ladoA === ladoB && ladoB === ladoC)
   return "Equilátero"
   if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) return "Isósceles"

   return "Escaleno"
   

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    const arrayNumeros = retornaArrayOrdenado(array)
    const segundoMenor = 1
    const segundoMaior = array.length - 2
 
    return [
        arrayNumeros[segundoMaior],
        arrayNumeros[segundoMenor]
    ]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return { ...pessoa, nome: "ANÔNIMO" }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
 
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
   const somar = (num1, num2) => num1 + num2

   contas.forEach(conta => {

      const somaDosGastos = conta.compras.reduce(somar, 0)

      conta.saldoTotal -= somaDosGastos

      conta.compras = []
   })

   return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}