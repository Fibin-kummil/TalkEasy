import express from "express";
import { uploads } from "../middleWare/multer.js";
import { RequestedTrainer, TrainerData, cancelRequiest,closeNotification } from "../controllers/trainerController.js";

const trainerRouter = express.Router();

trainerRouter.post(
  "/trainerData",
  uploads.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 }, 
  ]),
  TrainerData
);
trainerRouter.get('/requestedTrainer',RequestedTrainer)
trainerRouter.post('/cancel_requiest',cancelRequiest)
trainerRouter.post('/close',closeNotification)


export default trainerRouter;
