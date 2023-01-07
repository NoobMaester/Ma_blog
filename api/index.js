import express from "express"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

app.listen(8800, ()=>{
    console.log("connected! to backend")
})