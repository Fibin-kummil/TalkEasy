import express from "express"
import { RoomData, getRooms,roomActive,deleteMyRoom } from "../controllers/roomController.js"


const roomRouter = express.Router()


roomRouter.post('/RoomData',RoomData)
roomRouter.get('/getRooms',getRooms)
roomRouter.post('/roomActive',roomActive)
roomRouter.post('/deleteMyRoom',deleteMyRoom)


export default roomRouter

