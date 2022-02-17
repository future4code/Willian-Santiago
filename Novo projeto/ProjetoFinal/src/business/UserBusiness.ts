// import { User } from "../model/User"
// import { HashManager } from "../services/HashManager"
// import { IdGenerator } from "../services/IdGenerator"

// export class UserBusiness{
//     async signup(input: SignUpInput): Promise <string> {
//         try{

//             if(!input.name || !input.email || !input.password || !input.role){
//                 throw new Error("Parametros invalidos")
//             }

//             const idGenerator = new IdGenerator()
//             const id: string = idGenerator.generate()

//             const hashManager = new HashManager()
//             const cypherPassword = await hashManager.createHash(input.password)

//             const user: User = {
//                 id,
//                 name: input.name,
//                 email: input.email,
//                 password: cypherPassword,
//                 role: input.role
//             }

//             const userDatabase = new UserDatabase()
//             await userDatabase.insertUser(user)

//         } catch(error)
//     }
// }