import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

app.get("/users", (req: Request, res: Response) => {
  res.send(users)
})

// O metodo utilizado é o get
// Entidade Usuarios




app.get("/users/:id", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id: number = Number(req.params.id)

    if (isNaN(id)) {
      errorCode = 422 //unprocessable entity
      throw new Error("Invalid value for id. Please send a number.")
    }

    const user = users.find((user) => {
      return user.id === id;
    });

    if (!user) {
      errorCode = 404;
      throw new Error("User not found.")
    }

    res.status(200).send(user)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})

// Os parametros foram passado por id, pq quando já faz a busca exata
// Para garantir que apenas os types válidos sejam utilizados pedimos apenas numeros


app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { id, name, email, type, age } = req.body

    if (!id || !name || !email || !type || !age) {
      errorCode = 422
      throw new Error("Please check the fields!")
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    }

    users.push(newUser)

    res.status(201).send({ message: "User created successefully" })
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message })
  }
})

// Se mudar para put ele ira atualizar os dados, o metodo post serve para criar novos


// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
