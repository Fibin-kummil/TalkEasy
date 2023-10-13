import express from "express"
import { AdminLogout, AllTrainer, AllUsers, BlockUser, DelectTrainer,profileUpdate } from "../controllers/adminController.js";

const adminRouter = express.Router()


adminRouter.post("/blockUsers", BlockUser);
adminRouter.get("/allTrainer", AllTrainer);
adminRouter.get("/allUsers", AllUsers);

adminRouter.post("/delectTrainer", DelectTrainer);
adminRouter.post("/admin_logout", AdminLogout);
adminRouter.post("/profile_update", profileUpdate);


export default adminRouter
