import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

const allUsers = async (req: Request, res: Response) => {
    try{
        
        const users: user[] = await connection("users")
        res.send(users)
        
    }catch(error: any){
        res.status(500).send({message: error.message})
    }
}
export default allUsers
