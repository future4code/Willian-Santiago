import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {res.send("Olá, mundo")})


app.post("/user", async (req, res) => {
     try {

        const {name, nickname, email} = req.body
        console.log(req.body)
       await connection.raw(`
        INSERT INTO Usuario
        (id, name, nickname, email)
        VALUES (
            "${Date.now().toString()}",
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}"
        );
        `);
        res.status(200).send("O usuario foi criado")

    } catch (error) {
        res.status(500).send({message:error})
        console.log("teste", error)
    }
})



// app.get("/user", async (req, res) => {
//     try {
        
//      const result =  await connection.raw(`
//         SELECT * FROM Usuario
//         `);
        
//         res.status(200).send(result[0])

//     } catch (error) {
//         res.status(500).send("Algo deu errado")
//     }
// })

app.get("/user", async (req, res) => {
    try {
        const resultado = await connection("Usuario")
        res.status(200).send(resultado)
    } catch(error) {
        res.status(500).send("Ocorreu algum erro")
    }
    
})

app.get("/user/:id", async (req, res) => {
    try {
        const id = req.params.id 
   await connection("Usuario")
        
        res.status(200).send("Encontrado")

    } catch (error) {
        res.status(500).send("Algo deu errado")
    }
})


app.put("/user/:id", async (req, res) => {
    try {
         
   await connection("Usuario")
      .update({
          name: req.body.name,
          nickname: req.body.nickname,
          email: req.body.email
      })  
      .where({id: req.params.id})

        res.status(200).send("Alterado com sucesso")

    } catch (error) {
        res.status(500).send("Algo deu errado")
    }
})


app.post("/task", async (req, res) => {
    try {

       const {title, description, limitDate} = req.body
       console.log(req.body)
      await connection.raw(`
       INSERT INTO Usuario
       (id, name, nickname, email)
       VALUES (
           "${Date.now().toString()}",
           "${req.body.title}",
           "${req.body.description}",
           "${req.body.limitDate}"
       );
       `);
       res.status(200).send("A tarefa foi criada")

   } catch (error) {
       res.status(500).send({message:error})
       console.log("teste", error)
   }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app