import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

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

    createPost = () => {}
}