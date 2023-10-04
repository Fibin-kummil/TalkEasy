import express from "express"
import { verifyToken } from "../middleWare/userMiddleware.js"
import {signup,login,logout, sendOtp, profileUpdate, chooseLanguage, searchTrainer} from "../controllers/userController.js"

const useRouter = express.Router()

useRouter.post('/signUp',signup)
useRouter.post('/LogiN',login)
useRouter.post('/logout',logout)
useRouter.get('/sendOtp',sendOtp)
useRouter.post('/profile_update',verifyToken,profileUpdate)
useRouter.post('/language_choose',chooseLanguage)
useRouter.post('/search_trainer',verifyToken,searchTrainer)
 
export default useRouter

