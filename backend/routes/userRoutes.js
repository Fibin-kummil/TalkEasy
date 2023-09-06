import express from "express"
import { verifyToken } from "../middleWare/userMiddleware.js"
import {signup,login,logout, sendOtp} from "../controllers/userController.js"

const useRouter = express.Router()

useRouter.post('/signUp',signup)
useRouter.post('/LogiN',login)
useRouter.post('/logout',logout)
useRouter.get('/sendOtp',sendOtp)
 
export default useRouter

