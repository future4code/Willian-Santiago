import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

const allRecipe = async (req: Request, res: Response) => {
    try{
        const id = req.query.id || "%"
        const title = req.query.title || "%"
        const description = req.query.description || "%"

        const recipes: recipe[] = await connection("recipes")
        .where("title", "LIKE", `%${title}%`)
        .where("description", "LIKE", `%${description}%`)
        .where("id", "LIKE", `%${id}%`)
        res.send(recipes)
        
    }catch(error: any){
        res.status(500).send({message: error.message})
    }
}
export default allRecipe