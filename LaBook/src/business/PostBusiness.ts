import { PostDataBase } from "../data/PostDataBase";
import { createPostInput, post } from "../model/Post";
import { AuthenticatorData } from "../model/User";
import { Authenticator } from "../services/Authenticator"
import { idGenerator } from "../services/idGenerator";

export class PostBusiness{

    getPostById = async (id: string):Promise <post | undefined> => {
        const post = await new PostDataBase().getPostById(id)

        return post
    }
    
   async createUser(input: createPostInput){

    try{

    const tokenManager = new Authenticator()

    if(!input.token) {
        throw new Error(" A jwt must be provided")
    }
        
    
    const tokenData: AuthenticatorData = tokenManager.getTokenData(input.token)

    const myIdGenerator = new idGenerator()
    const id: string = myIdGenerator.generate()
    
    const post: post = {
        userId: tokenData.id,
        id,
        photo: input.photo,
        description: input.description,
        type: input.type,
        dateCreate: new Date()
    }

    await new PostDataBase().createPost(post)
} catch(error: any) {
    throw new Error(error.message)
}
    }

}