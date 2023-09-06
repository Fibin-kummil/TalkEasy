import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import "dotenv/config";
import TrainerModel from "../models/trainerModel.js";
import { tryCatch } from "../utils/tryCatch.js";

export const TrainerData = tryCatch(async (req, res) => {
  const { name, email, password, phone, language } = req.body;
  const user = new TrainerModel({
    name,
    email,
    password,
    phone,
    language: language.split(","),
    certificate: [req.files.image1[0].filename, req.files.image2[0].filename],
  });
  await user.save();
  return res
    .status(200)
    .json({ message: "documents submitted successfully...!" });
});

export const RequestedTrainer = tryCatch(async(req,res)=>{
    let RequestedTrainer
    RequestedTrainer = await TrainerModel.find()
    res.status(200)
    .json({message:"details of user who apply for trainer", data: RequestedTrainer})
    return 
})
