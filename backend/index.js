import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import colors from "colors"
import connectDB from './config/db.js'
import userRoute from "./routes/user.route.js"

dotenv.config()
connectDB()

const app = express()

// app.use(cors())

app.use(cors({
  origin: ["http://localhost:8000", "https://hs-port-folio.netlify.app/"],
  methods: ["GET","POST","PUT","DELETE"],
}))

app.use(express.json())                             
app.use('/api/user', userRoute)

const port = process.env.PORT || 8000


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`.underline.cyan)
})
