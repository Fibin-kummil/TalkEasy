import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import "dotenv/config";
import TrainerModel from "../models/trainerModel.js";
import TemporaryModel from "../models/commanModel.js";
import { tryCatch } from "../utils/tryCatch.js";

export const TrainerLogin = tryCatch(async (res, req) => {
  const { email, password } = req.body;
  // console.log("Login attempt with email:", email);
  let existingTrainer;
  existingTrainer = await TrainerModel.findOne({ email: email });
  console.log(existingTrainer);
  if (!existingTrainer) {
    return res.status(400).json({ message: "Invalid Trainer" });
  }
  const isPassword = await existingTrainer.matchPasswords(password);
  if (!isPassword) {
    return res.status(400).json({ message: "Invalid password" });
  }

  // const token = jwt.sign({ id: existingTrainer._id }, process.env.JWT_SECRET_KEY, {
  //   expiresIn: "1d",
  // })

  // console.log("token send", token);
  // const path = existingTrainer?.role === "admin" ? "/adminHome" : "/";
  // // console.log("Redirect path:", path);
  // return res
  //   .cookie("token", token, {
  //     path,
  //     expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour expiration
  //     httpOnly: true,
  //     sameSite: "lax",
  //   })
  //   .status(200)
  //   .json({ message: "Successfully Logged in", user: existingTrainer, token });
})

export const TrainerData = tryCatch(async (req, res) => {
  const { name, email, password, phone, language } = req.body;
  console.log(1);
  const user = new TemporaryModel({
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

export const RequestedTrainer = tryCatch(async (req, res) => {
  let RequestedTrainer;
  RequestedTrainer = await TemporaryModel.find();
  res
    .status(200)
    .json({
      message: "details of user who apply for trainer",
      data: RequestedTrainer,
    });
  return;
});

export const cancelRequiest = tryCatch(async (req, res) => {
  const { email } = req.body;
  await TemporaryModel.deleteOne({ email: email });
  await User.updateOne(
    { email: email },
    {
      $push: {
        notification:
          "You are not allowded as a trainer,Your request has been cancelled",
      },
    }
  );
  // console.log("a",b)
});

export const ApproveTrainer = tryCatch(async (req, res) => {
  const { email } = req.body;
  //  let v =await User.deleteOne({email:email})
  //  console.log("data",v);
  let data = await TemporaryModel.findOne({ email: email });

  console.log("data", data);
  const { name, password, phone,language, certificate } = data;
  // console.log("naseef", trainerData._doc);
  const Trainer = new TrainerModel(
{    name,
    email,
    password,
    phone,
    language,
    certificate}
  );
  await Trainer.save();

   await TemporaryModel.deleteOne({email:email})
})

export const closeNotification = tryCatch(async (req, res) => {
  const { email, index } = req.body;
  console.log("req", req.body);
  let a = await User.findOne({ email: email });
  const notification = a.notification.filter((x, i) => i != index);
  await User.updateOne(
    { email: email },
    { $set: { notification: notification } }
  );
  console.log("12", a);
})

export const ShowTrainers = tryCatch(async(req,res) => {
 let showTrainer = await TemporaryModel.find()
 console.log("hhh",showTrainer);
 res
 .status(200)
 .json({
   message: "Avilable Trainers",
   data: showTrainer,
 })
return;
})
