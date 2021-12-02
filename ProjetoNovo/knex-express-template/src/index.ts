import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {res.send("Olá, mundo")})

app.post("/users", async (req, res) => {

    try{
        const {name, email, password} = req.body
       
      await connection.raw(`
        INSERT INTO ecomerce_users
        (id, name, email, password)
        VALUES(
            "${Date.now().toString()}",
            "${req.body.name}",
            "${req.body.email}",
            "${req.body.password}"
        )
        `);
        res.status(201).send("Usuário criado com sucesso")

    } catch(error){
        
        res.status(500).send("Ocorreu um erro inesperado")
    }
})

app.get("/users", async (req, res) => {
    try{
        const resultado = await connection("ecomerce_users")
        res.status(200).send(resultado)

    } catch(error){
        res.status(500).send("Ocorreu um erro")
    }
})


app.post("/products", async (req, res) => {

  try{
      const {name, price, image_url} = req.body
     
    await connection.raw(`
      INSERT INTO ecomerce_products
      (id, name, price, image_url)
      VALUES(
          "${Date.now().toString()}",
          "${req.body.name}",
          "${req.body.price}",
          "${req.body.image_url}"
      )
      `);
      res.status(201).send("Produto cadastrado com sucesso")

  } catch(error){
      
      res.status(500).send("Ocorreu um erro inesperado")
  }
})

app.get("/products", async (req, res) => {
  try{

    const resultado = await connection("ecomerce_products")

    res.status(200).send(resultado)
  } catch(erro){
    res.status(500).send("Ocorreu algum erro inesperado")
  }
})

app.post("/purchase", async (req, res) => {

  try{
      const {user_id, product_id, quantity} = req.body
      console.log(req.body)
     
    await connection.raw(`
      INSERT INTO ecomerce_purchase
      (id, user_id, product_id, quantity)
      VALUES(
          "${Date.now().toString()}",
          "${req.body.user_id}",
          "${req.body.product_id}",
          "${req.body.quantity}"
      )
      `);
      res.status(201).send("Produto cadastrado com sucesso")

  } catch(error){
    console.log(error)
      
      res.status(500).send("Ocorreu um erro inesperado")
  }
})

// app.get("/user", async (req, res) => {
//     try {
//         const name = req.query.name || "%"
//         const resultado = await connection("aula49_exercicio")
//         .where("name", "LIKE", `%${name}%`)

//         res.status(200).send(resultado)
//     } catch(error) {
//         res.status(500).send("Ocorreu algum erro")
//     }

// })

// app.get("/user", async (req, res) => {
//     try {

//         const query = req.query.query || "%"
//         const name = req.query.name || "%"
//         const sort = req.query.sort === "name" ? "name" : "email"
//         const order = req.query.order === "DESC" ? "DESC" : "ASC"
//         const page = Number(req.query.page) || 1
//         const size = Number(req.query.size) || 5
//         const offset = size * (page - 1)

//         const resultado = await connection("aula49_exercicio")
//         .where("name", "LIKE", `%${name}%`)
//         .orWhere("type", "LIKE", `%${query}%`)
//         .orderBy(sort, order)
//         .limit(size)
//         .offset(offset)


//         res.status(200).send(resultado)
//     } catch(error) {
//         res.status(500).send("Ocorreu algum erro")
//     }

// })

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app