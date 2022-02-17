import { app } from "./controller/app"
import { PostControler } from "./controller/PostController"
import { UserControler } from "./controller/UserController"

app.get("/", (req, res) =>{
    res.send("Olá mundo")
})

const postController = new PostControler()
const userController = new UserControler()

app.post("/signup", userController.signup)
app.post("/login", userController.login)
app.get("/users/:id", userController.getUserById)

app.get("/posts/:id", postController.getPostById)
app.post("/post", postController.createPost)
