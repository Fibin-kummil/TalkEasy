import express from "express"
import { verifyToken } from "../middleWare/userMiddleware.js"
import {signup,login,logout, sendOtp, profileUpdate, chooseLanguage, searchTrainer} from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post('/signUp',signup)
userRouter.post('/LogiN',login)
userRouter.post('/logout',logout)
userRouter.get('/sendOtp',sendOtp)
userRouter.post('/profile_update',verifyToken,profileUpdate)
userRouter.post('/language_choose',chooseLanguage)
userRouter.post('/search_trainer',verifyToken,searchTrainer)
 
export default userRouter

