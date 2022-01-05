import { PostDataBase } from "../data/PostDataBase";
import { post } from "../model/Post";

export class PostBusiness{

    getPostById = async (id: string):Promise <post | undefined> => {
        const post = await new PostDataBase().getPostById(id)

        return post
    }
    
}