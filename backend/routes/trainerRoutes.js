import express from "express";
import { uploads } from "../middleWare/multer.js";
import {
  ApproveTrainer,
  RequestedTrainer,
  ShowTrainers,
  TrainerData,
  TrainerLogin,
  cancelRequiest,
  closeNotification,
} from "../controllers/trainerController.js";

const trainerRouter = express.Router();

trainerRouter.post(
  "/trainerData",
  uploads.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  TrainerData
);
trainerRouter.get("/requestedTrainer", RequestedTrainer);
trainerRouter.get("/show_trainers", ShowTrainers);
trainerRouter.post("/cancel_requiest", cancelRequiest);
trainerRouter.post("/approve_trainer", ApproveTrainer);
trainerRouter.post("/close", closeNotification);
trainerRouter.post("/trainer_login", TrainerLogin);

export default trainerRouter;
