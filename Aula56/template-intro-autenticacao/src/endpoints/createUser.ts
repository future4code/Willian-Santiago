import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../Services/Auth";
import { HashManager } from "../Services/HashManager";
import { IdGenerated } from "../Services/service";
import { user } from "../types";


const createUsers = async(req: Request, res: Response) => {
   try{

     const {name, email, password, role} = req.body;
     if(!name || !email || !password || !role){
       throw new Error("Está faltando parametros")
     }

     const [user] = await connection('users')
      .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new IdGenerated().generatedId()

      const cypherPassword: string = new HashManager().createHash(password)


      const newUser: user = { 
        id,
        name,
        email,
        password: cypherPassword,
        role
      }

      await connection('users')
      .insert(newUser)

      const token = new Authenticator().generateToken({ id, role })

      res.status(201).send({ newUser, token })


     res.status(200).send({message: "Usuário criado com sucesso"})

   }catch(error: any){
     res.status(500).send({message: error.message})
   }
}
export default createUsers
