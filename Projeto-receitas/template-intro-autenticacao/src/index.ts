import app from "./app"
import createUser from './endpoints/createUser'
import { v4 } from "uuid"
import login from "./endpoints/login"
import allUsers from "./endpoints/allUsers"
import { HashManager } from "./Services/HashManager"
import editUser from "./endpoints/editUser"
import createRecipes from "./endpoints/createRecipes"
import allRecipe from "./endpoints/allRecipe"


app.post('/users/signup', createUser)
app.post('/user/login', login)
app.get("/user/profile", allUsers)
app.get("/user/:id", allUsers)
app.put("/user", editUser)
app.post("/recipe", createRecipes)
app.get("/recipe", allRecipe)
const id = v4();

console.log("Generated Id: ", id);

// const hashManager = new HashManager()

// const cypherPassword: string = hashManager.createHash("Teste")

// const passwordIsCorrect = hashManager.compareHash("12345", cypherPassword)

// console.log(passwordIsCorrect)

