import express from "express"
import postRoutes from "./routes/posts.js"
import postAuth from "./routes/auth.js"
import postUser from "./routes/user.js"


const app = express()

app.use(express.json())
app.use("/public/posts", postRoutes)

app.listen(3306, () => {
    console.log("Connected!")
})