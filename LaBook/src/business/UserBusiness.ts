import { UserDatabase } from "../data/UserDatabase";
import { AuthenticatorData, User } from "../model/User";

export class UserBusiness{

    getUserById = async (id: string):Promise <AuthenticatorData | undefined> => {
        const user = await new UserDatabase().getUserById(id)

        return user
    }
    createUsers = async (user: User): Promise <User | undefined> => {
        const newUser = await new UserDatabase().createUser(user)
        return newUser
    }
}