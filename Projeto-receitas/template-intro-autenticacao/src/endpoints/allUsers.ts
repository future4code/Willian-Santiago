import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

const allUsers = async (req: Request, res: Response) => {
    try{
        const id = req.query.id || "%"
        const name = req.query.name || "%"
        const email = req.query.email || "%"

        const users: user[] = await connection("recipes_users")
        .where("name", "LIKE", `%${name}%`)
        .where("email", "LIKE", `%${email}%`)
        .where("id", "LIKE", `%${id}%`)
        res.send(users)
        
    }catch(error: any){
        res.status(500).send({message: error.message})
    }
}
export default allUsers
