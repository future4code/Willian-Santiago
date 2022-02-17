import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../Services/Auth";
import { HashManager } from "../Services/HashManager"


const login = async(req: Request, res: Response) => {
    try{
        const {email, password} = req.body

        if (!email || !password) {
        res.statusCode = 422
        throw new Error("Preencha os campos 'email' e 'password' ")
    }

        const [user] = await connection("recipes_users").where({ email })

    const passwordIsCorrect: boolean = new HashManager().compareHash(
        password,
        user?.password
    )

        if (!user || !passwordIsCorrect) {
            res.statusCode = 401
            res.statusMessage = "Credenciais invalidas"
            throw new Error()
        }
        const token = new Authenticator().generateToken({ id: user.id, role: user.role })

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