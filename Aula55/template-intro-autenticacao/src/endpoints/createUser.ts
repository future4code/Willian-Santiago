import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../Services/Auth";
import { IdGenerated } from "../Services/service";
import { User, user } from "../types";


const createUsers = async(req: Request, res: Response) => {
   try{

     const {name, email, password} = req.body;
     if(!name || !email || !password){
       throw new Error("Está faltando parametros")
     }

     const [user] = await connection('users')
      .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new IdGenerated().generatedId()

      const newUser: User = { id, name, email, password }

      await connection('users')
      .insert(newUser)

      const token = new Authenticator().generateToken({ id })

      res.status(201).send({ newUser, token })


     res.status(200).send({message: "Usuário criado com sucesso"})

   }catch(error: any){
     res.status(500).send({message: error.message})
   }
}
export default createUsers

// export default async function createUser(
//    req: Request,
//    res: Response
// ): Promise<void> {
//    try {

//       const { name, nickname, email } = req.body

//       if (!name || !nickname || !email ) {
//          res.statusCode = 422
//          throw new Error("Preencha os campos 'name', 'nickname' e 'email'")
//       }

//       const [user] = await connection('to_do_list_users')
//          .where({ email })

//       if (user) {
//          res.statusCode = 409
//          throw new Error('Email já cadastrado')
//       }

//       const id: string = Date.now().toString()

//       const newUser: user = { id, name, nickname, email }

//       await connection('to_do_list_users')
//          .insert(newUser)

//       res.status(201).send({ newUser })

//    } catch (error) {

//       if (res.statusCode === 200) {
//          console.log(error)
//          res.status(500).send({ message: "Internal server error" })
//       } else {
//          res.send({ message: error.sqlMessage || error.message })
//       }
//    }
// }