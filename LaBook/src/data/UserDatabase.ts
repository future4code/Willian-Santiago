import { AuthenticatorData, User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    getUserById = async (id: string): Promise <AuthenticatorData | undefined> => {
        
        const result = await this.connection("labook_users").where({id})
        return result[0]
    }
    createUser = async (user: User): Promise <User | undefined> => {
        const  newUser = await this.connection("labook_users").where({user})
        return newUser[0]
    }
}