import { app } from "./controller/app";

app.get("/", (req, res) => {
    res.send("Olá mundo")
})
