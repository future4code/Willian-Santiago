
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { HashManager } from "../services/HashManager";
import { idGenerator } from "../services/idGenerator";


export class UserControler{

    getUserById = async (
        req: Request,
        res: Response
    ) => {
        try {

            const {id} = req.params

           const user = await new UserBusiness().getUserById(id)
           res.send(user)

        } catch (error) {
            console.log(error)
            res.status(500).send("Algo deu errado")
        }
    }
    createUser = async (req: Request, res: Response) => {
        try {
            const {name, email, password} = req.body

            if(
                !name ||
                !email ||
                !password ||
            ) {
                throw new Error("Preencha todos os campos")
            }
            const id: string = generate()

            const cypherPassword = await HashManager(password);

            await insertUser({
                id,
                name,
                email,
                password: cypherPassword,
             })
            
        } catch(error){
            res.status(500).send("Ocorreu algum erro")
        }
    }
}
