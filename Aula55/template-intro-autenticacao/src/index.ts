import app from "./app"
import createUser from './endpoints/createUser'
import { v4 } from "uuid"
import login from "./endpoints/login"
import allUsers from "./endpoints/allUsers"


app.post('/users/signup', createUser)
app.post('/user/login', login)
app.get("/users", allUsers)

const id = v4();

console.log("Generated Id: ", id);