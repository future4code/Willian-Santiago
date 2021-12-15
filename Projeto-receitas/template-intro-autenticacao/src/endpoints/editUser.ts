import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../Services/Auth";
import { USER_ROLES } from "../types";

const editUser = async(
   req: Request,
   res: Response
) => {
   try {

      const { name } = req.body
      const token = req.headers.authorization

      if (!name) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      const tokenData = new Authenticator().getTokenData(token)

      if(!tokenData){
         res.statusCode = 401
         res.statusMessage = "O token está invalido ou não foi passado o headers"
         throw new Error()
      }

      if(tokenData.role !== USER_ROLES.ADMIN){
         res.statusCode = 403
         throw new Error()
      }

      await connection('ecomerce_users')
         .update({ name })
         .where({ id: tokenData.id })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}
export default editUser