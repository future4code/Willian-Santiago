
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
    return `A igualdade é: ${a === b}`
}
console.log(checarIgualdade(1, 2))
// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b){
    return `O parametro é maior que b? ${a > b}`
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= False
// b-) 1=='1'= Verdadeiro
// c-) 'a'==='b'= Verdadeiro
// d-) 'b'>'a'= Verdadeiro
// e-) 0!==null= Verdadeiro


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------


// const cadastro = () => {
//     const usuario = []

//     //  Sua lógica aqui
//     let nomeDoUsuario = prompt("Qual seu nome?")
//     let anoDeNascimento = Number(prompt("Seu ano de nascimento?"))
//     let senhaDousuario = Number(prompt("Qual sua senha?"))
//     let nacionalidade = prompt("Qual sua nacionalidade?")
    
//     usuario.push(nomeDoUsuario)
//     usuario.push(anoDeNascimento)
//     usuario.push(senhaDousuario)
//     usuario.push(nacionalidade)
    
    

//     if(anoDeNascimento < 2003 && senhaDousuario.length >=6 && nacionalidade === "brasileiro"){

        
    
//     }return usuario

// }

// console.log(cadastro());


// Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui
//     let senhaDousuario = prompt("Digite sua senha")
//     if(senhaDousuario === "labenu" ){
//         console.log("Usuário logado")
//     }else{
//         console.log("Senha inválida")
//     }

// }

// console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui

//     let nomeDoUsuario = prompt("Qual seu nome?")
//     let nomeDaVacina = prompt("Qual vacina você tomou?")



//     let tempo = "28"
//     let data = "01/08/2021"

//     if(nomeDaVacina === "Coronavac"){
//         tempo = 28
//         data = "28/09/2021"

        
//     }else if(nomeDaVacina === "Astrazenica"){
//         tempo = 90
//         data = "10/12/2021"

//     }else if(nomeDaVacina === "Pfizer"){
//         tempo = 90
//         data = "10/12/2021"

//          return `Olá ${nomeDoUsuario}, a proxima dose da vacina ${nomeDaVacina} e daqui a ${tempo} dias. Compareça no posto na data ${data} `
//     }



// }
// console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui

//     let pessoa = usuarios.filter((usuario) =>{

//     if(usuario.nome === nomeDoUsuario){
//         usuario.imunizacao === "completa"
//         return usuario
//     }
   
//     })

    
// }
// console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

    let avisos = usuarios.filter((usuario)=>{
        if(usuario.imunizacao === "incompleta"){
            console.log(`O usuario ${usuario.nome} está com sua imunização ${usuario.imunizacao}`)
        }

    }) 

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

// const cadastro = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastro());

// const login = () => {
//     //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());