import "dotenv/config";
import { tryCatch } from "../utils/tryCatch.js";
import TrainerModel from "../models/trainerModel.js";
import userModel from "../models/userModel.js";


export const AllTrainer = tryCatch(async(req,res)=>{
  console.log("AvailabeTrainer");
  let AvailabeTrainer = await TrainerModel.find()
  res.status(200).json({data:AvailabeTrainer,message:"All Avilable Trainers"})
  // console.log(req.headers);
  return
})

export const AllUsers = tryCatch(async(req,res)=>{
  const users = await userModel.find({ role: { $ne: 'admin' } });
  res.status(200).json({message:"All Current Users",data:users})
})

export const BlockUser =  tryCatch(async(req,res)=>{
      const {email,block} = req.body
      console.log(req.body,email);
        // const user = await userModel.find({email});
        // console.log(user);
      const post = await userModel.updateOne({email:email},{$set:{block}})
      if (!post) {
        return res.status(404).json({ message: "Something Went Wrong !" })
      }
      return res.status(200).json({post,message:"user blocked"})
})

export const DelectTrainer = tryCatch(async(req,res)=>{
  const {email} = req.body
  // console.log(req.body);
  const delect = await TrainerModel.deleteOne({email:email})
  console.log(delect);
  if(delect){
    return res.status(200).json({messsage:"Delect the trainer from trainer list"})
  }
})

export const AdminLogout = tryCatch(async(req,res)=>{
  res.clearCookie("token")
  // console.log("wqgfdshd");
  return res.status(200).json({ message: "Admin Succefully Logged out" });
})

export const profileUpdate = tryCatch(async(req,res)=>{
  const {name,phone,email} = req.body
  // console.log("12",req.body,req.body._id);
  const data = await userModel.findByIdAndUpdate(req.body._id,{ $set: { name: name, phone: phone, email: email } },{ new: true });
  // console.log(data);
   return res.status(200).json({data})
})
