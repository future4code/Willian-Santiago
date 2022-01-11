import { UserDatabase } from "../data/UserDatabase";
import { AuthenticatorData, LoginInput, SignUpInput, User } from "../model/User";
import { HashManager } from "../services/HashManager";
import { idGenerator } from "../services/idGenerator";
import { Authenticator } from "../services/Authenticator"
import { compare } from "bcryptjs";


export class UserBusiness{

    getUserById = async (id: string):Promise <AuthenticatorData | undefined> => {
        const user = await new UserDatabase().getUserById(id)

        return user
    }
    signup = async(input: SignUpInput): Promise <string> => {
    try{

        if (!input.name || input.email || input.password) {

            throw new Error("name, email ou password com parametros invalidos")
        }

        const MyidGenerator = new idGenerator()
        const id: string = MyidGenerator.generate()

        const hashManager = new HashManager()
        const cypherPassword = await hashManager.createHash(input.password)

        const user: User = {
            id,
            name: input.name,
            email: input.email,
            password: cypherPassword
        }
        console.log(user)

        const userDatabase = new UserDatabase()
        await userDatabase.insertUser(user)

        const tokenManager = new Authenticator()

        const token: string = tokenManager.generateToken({ id })
        
        return token
    } catch (error: any) {
        throw new Error(error.message)
    }
    }

    async login(input: LoginInput): Promise <string>{

        try{

        
        if(!input.email || !input.password) {

            throw new Error("email and password must be provided")
        }

        const userDatabase = new UserDatabase()
        const user: User = await userDatabase.getUserByEmail(input.email)

        if(!user) {
            throw new Error("Credenciais invalidas")
        }

        const hashManager = new HashManager()
        const passwordISCorrect: boolean = await compare(input.password, user.password)
    
        if (passwordISCorrect) {
            throw new Error("Credenciais invalidas")
        }

        const tokenManager = new Authenticator()

        const token: string = tokenManager.generateToken({
            id: user.id
        })
        
        return token
    
    } catch (error: any) {
        throw new Error(error.message)
    }
}
}