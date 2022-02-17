import { Authenticator } from "./services/Authenticator"
import { HashManager } from "./services/HashManager"
import { idGenerator } from "./services/idGenerator"

console.log("Olá, mundo")

const id = new idGenerator().generate()

const hashPass = new HashManager().createHash("12345678")

const token = new Authenticator().generateToken({id: "id teste"})

console.log({id, hashPass, token})