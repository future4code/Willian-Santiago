import { PostControler } from "../controller/PostController"
import { post } from "../model/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDataBase extends BaseDatabase{
    getPostById = async (
        id: string
    ): Promise <post | undefined >=> {

        const result = await this.connection("labook_posts").where({id})
        return result[0]
    }

    async createPost(post: post){
        try{
        await this.connection("labook_posts")
        .insert({
        userId: post.userId,
        id: post.id,
        photo: post.photo,
        description: post.description,
        type: post.type,
        dateCreate: post.dateCreate.toISOString().substring (0, 10)
        
        
    })
        } catch (error: any) {
            throw new Error(error.message)
        }

    }
}