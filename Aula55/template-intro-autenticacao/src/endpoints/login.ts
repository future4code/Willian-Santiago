import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../Services/Auth";


const login = async(req: Request, res: Response) => {
    try{
        const {email, password} = req.body

        if (!email || !password) {
        res.statusCode = 422
        throw new Error("Preencha os campos 'email' e 'password' ")
    }

        const [user] = await connection("users").where({ email })

        if (!user || user.password !== password) {
            res.statusCode = 401
            res.statusMessage = "Credenciais invalidas"
            throw new Error()
        }
        const token = new Authenticator().generateToken({ id: user.id })

        res.status(200).send({ token })

    }catch (erro) {
        if (res.statusCode === 200) {
        console.log(erro)
        res.status(500).send({ message: "Internal server error" })
    } else {
        res.end()
     }
    }
}

export default login