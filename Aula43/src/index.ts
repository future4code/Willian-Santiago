console.log("Hello World")

enum Pessoas {
    TESTE = "Teste",
    IDADE = 48,
    CORPREFERIDA = "Azul"
}

type Pessoa = {
    nome: string
    idade: number
    corFavorita: Pessoas
}



let minhaString: string = "Teste"

// O código vai dar erro, pq passei como string e não como number

let numero: number | string = 5

const pessoa: Pessoa = {
    nome: "Teste",
    idade: 48,
    corFavorita: Pessoas.CORPREFERIDA
}

const pessoa2: Pessoa = {
    nome: "Teste2",
    idade: 48,
    corFavorita: Pessoas.CORPREFERIDA
}

const pessoa3: Pessoa = {
    nome: "Teste2",
    idade: 48,
    corFavorita: Pessoas.CORPREFERIDA
}


function obterEstatisticas() {

    const numeros: number[] = [0, 6, 8, 2, 10]

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type Person = {
    autor: string
    texto: string
}

const posts: Person[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  function buscarPostsPorAutor(posts: Person[], autorInformado: string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }