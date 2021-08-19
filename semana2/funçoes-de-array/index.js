// Exercicio de interpretação

// Vai ser exibido toda a lista com nomes e apelidos

// Vai ser impremido a lista apenas com nomes

// Vai retorna todos os outros tirando o selecionado pelo filter

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  let novoArray = pets.map((item1, item2, item3) =>{
//  return item1.nome})

//  console.log(novoArray)

//  let arrayRaca = pets.filter((item1, item2, item3) =>{
//     return item1.raca === "Salsicha"
//  })
// console.log(arrayRaca)

// let mensagemClientes = pets.filter((item1, item2, item3) =>{
//    return item1.raca === "Poodle"

// })
// let nomeCliente = pets.map((item1, item2, item3) =>{
//     return item1.nome
// })

// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a`, mensagemClientes[0])
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a`, mensagemClientes[1])

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  let nomeDeCadaItem = produtos.map((item1, item2, item3) =>{
//     return item1.nome
//  })
//  console.log(nomeDeCadaItem)

// let nomePreco = produtos.filter((item1, item2, item3) =>{
//     return item1.nome
 
// })

// console.log(nomePreco)

// let bebidas = produtos.filter((item1, item2, item3) =>{
//     return item1.categoria === "Bebidas"
// })
// console.log(bebidas)

// let apenasYpe = produtos.filter((item1, item2, item3) =>{
//     return item1.nome.includes("Ypê")
// })
// console.log(apenasYpe)


// let frase = produtos.filter((item1, item2, item3) =>{
//     return item1.nome.includes("Ypê")
// })
// console.log("Compre", frase[0])
// console.log("Compre", frase[1])
