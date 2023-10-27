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
// import { Server } from "socket.io";

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



// const port = process.env.PORT || 6000
// const server = app.listen(port,()=>{
//   connect()
//   console.log(`Port running in ${port}`)
// })


// const io = new Server(server,{ 
//   cors:{
//     origin:process.env.CLIENT_API
//   }
//  });

// io.on("connection", (socket) => {
//   console.log("connected");
//   socket.on("disconnect",()=>{
//     console.log("disconneced");
//   })
//   socket.on("notify",(message)=>{
//     console.log("yes",message);
//     socket.emit('notification',message)
//   })
// });




