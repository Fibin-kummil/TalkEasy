import 'dotenv/config'
// import dotenv from "dotenv"
import  express  from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import connect from './config/dbConnect.js'
import userRouter from './routes/userRoutes.js'
import trainerRouter from './routes/trainerRoutes.js'
import roomRouter from './routes/roomRouter.js'
import adminRouter from './routes/adminRoute.js'


// dotenv.config()

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./public"))

app.use(cors({credentials:true,origin:process.env.CLIENT_API}))
app.use("/api",userRouter)
app.use("/api/trainer",trainerRouter)
app.use("/api/Room",roomRouter)
app.use("/api/admin",adminRouter)


const port = process.env.PORT || 6000
app.listen(port,()=>{
  connect()
  console.log(`Port running in ${port}`)
})




