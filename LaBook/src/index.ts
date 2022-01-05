import { app } from "./controller/app"
import { PostControler } from "./controller/PostController"
import { UserControler } from "./controller/UserController"

app.get("/", (req, res) =>{
    res.send("Olá mundo")
})

const postController = new PostControler()
const userController = new UserControler()

app.get("/posts/:id", postController.getPostById)
app.get("/users/:id", userController.getUserById)