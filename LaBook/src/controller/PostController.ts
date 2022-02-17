import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { createPostInput } from "../model/Post";
import { AuthenticatorData } from "../model/User";

export class PostControler{

    getPostById = async (
        req: Request, 
        res: Response
    ) => {

        try {

            const {id} = req.params

            const post = await new PostBusiness().getPostById(id)
           
            res.send(post)

        } catch (error) {
            console.log(error)
            res.status(500).send("Algo deu errado")
        }
    }

    createPost = async (req: Request, res: Response) => {
        try{

            let message = "Success"

            const token: string = req.headers.authorization as string
           
            const input: createPostInput = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                token
            }

            await new PostBusiness().createUser(input)

            res.status(201).send({message})

        } catch (error: any) {
            let message = error.message
            res.statusCode = 400

            res.send({message})
        }
    }
}