// import { Request, Response } from "express";
// import {connection} from "../data/connection";
// import { Authenticator } from "../Services/Auth";
// import { recipe } from "../types";


// const createRecipes = async(req: Request, res: Response) => {
//    try{

//      const {title, description} = req.body;

//      if(!title || !description){
//        throw new Error("Está faltando parametros")
//      }

//      const recipes: recipe = {
//          id: Date.now().toString(),
//          title,
//          description
//      }
     
//      await connection("recipes").insert(recipes)

    
//      res.status(200).send({message: "Receita criada com sucesso"})

//    }catch(error: any){
//      res.status(500).send({message: error.message})
//    }
// }
// export default createRecipes

import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../Services/Auth";
import { HashManager } from "../Services/HashManager";
import { IdGenerated } from "../Services/service";
import { recipe, user } from "../types";


const createRecipes = async(req: Request, res: Response) => {
   try{

     const {title, description, role} = req.body;
     if(!title || !description || !role){
       throw new Error("Está faltando parametros")
     }


      const id: string = new IdGenerated().generatedId()


      const newRecipe: recipe = { 
        id,
        title,
        description,
        role
      }

      await connection('recipes')
      .insert(newRecipe)

      const token = new Authenticator().generateToken({ id, role })

      res.status(201).send({ newRecipe, token })


     res.status(200).send({message: "Receita criada com sucesso"})

   }catch(error: any){
     res.status(500).send({message: error.message})
   }
}
export default createRecipes

 