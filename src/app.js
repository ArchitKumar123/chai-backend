import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//json data
app.use(express.json({limit: "16kb"}))

//url data
app.use(express.urlencoded({extended: true, limit:"16kb"}))

//file forder store
app.use(express.static("public"))

//cookie 
app.use(cookieParser())

export { app }