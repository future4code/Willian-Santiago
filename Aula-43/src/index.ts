import express, { Request, Response } from "express"
import cors from "cors"
import { countries } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("O servidor está pronto")
})

app.get("/countries", (req: Request, res: Response) => {
  res.send(countries)
})

app.get("/countries/:id", (req, res) => {
  const id = req.params.id

  console.log(id)

  const result = countries.find((country) => {
    return country.id === Number(id)
  })

  if (result) {
    res.send(result)
  } else {
    res.status(404).send("País não encontrado")
  }

})


