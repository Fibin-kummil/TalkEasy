import express from "express"
import { RoomData, getRooms,roomActive } from "../controllers/roomController.js"


const roomRouter = express.Router()


roomRouter.post('/RoomData',RoomData)
roomRouter.get('/getRooms',getRooms)
roomRouter.post('/roomActive',roomActive)


export default roomRouter

