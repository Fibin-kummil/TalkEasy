import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import TrainerModel from "../models/trainerModel.js";
import fast2sms from "fast-two-sms";
import { tryCatch } from "../utils/tryCatch.js";
import "dotenv/config";
import {OAuth2Client} from 'google-auth-library'

export const signup = tryCatch(async (req, res) => {
  const { name, email, password, phone } = req.body;
  let existingUser = await User.findOne({ email: email });
  let existingTrainer = await TrainerModel.findOne({ email: email });
  if (existingUser || existingTrainer ) {
    res.status(400).json({ message: "User already exist" });
  }
  const user = new User({ name, email, password, phone });
  await user.save();
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  console.log("token send", token);
   res
    .cookie("token", token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour expiration
      httpOnly: true,
      sameSite: "lax",
    })
    .status(201)
    .json({ message: "Successfully registered", user: user, token });
})

export const googleSignUp = tryCatch(async(req,res)=>{
  // console.log("kk",req.body);
    const{credential,client_id}=req.body
    const client = new OAuth2Client(client_id);
    // Call the verifyIdToken to
    // varify and decode it
    const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: client_id,
    });
    // Get the JSON with all the user info
    const payload = ticket.getPayload();
    console.log(payload.email);
    // This is a JSON object that contains
    // all the user info
    // return payload;
    const email = payload.email
    const name = payload.name

    let existingUser = await User.findOne({ email: email });
  let existingTrainer = await TrainerModel.findOne({ email: email });
  if (existingUser || existingTrainer ) {
    res.status(400).json({ message: "User already exist" });
  }
  const user = new User({ name, email });
  await user.save();
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  console.log("token send", token);
   res
    .cookie("token", token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour expiration
      httpOnly: true,
      sameSite: "lax",
    })
    .status(201)
    .json({ message: "Successfully registered", user: user, token });

    
    
})



export const login = tryCatch(async (req, res) => {
  const { email, password } = req.body;
  // console.log("Login attempt with email:", email);
  let existingUser;
  existingUser = await User.findOne({ email: email });
  console.log(existingUser);
  if (!existingUser) {
    return res.status(400).json({ message: "Invalid User" });
  }
  const isPassword = await existingUser.matchPasswords(password);
  if (!isPassword) {
    return res.status(400).json({ message: "Invalid password" });
  }
  if (existingUser.block) {
    return res.status(400).json({
      message: "oops ! you've been temporarly blocked by the Admin",
    });
  }
  const payload = {
    id: existingUser._id,
    email: existingUser.email,
    role: existingUser.role,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  console.log("token send", token);
  const path = existingUser?.role === "admin" ? "/adminHome" : "/";
  // console.log("Redirect path:", path);
  return res
    .cookie("token", token, {
      path,
      expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour expiration
      httpOnly: true,
      sameSite: "lax",
    })
    .status(200)
    .json({ message: "Successfully Logged in", user: existingUser, token });
})


export const logout = tryCatch((req, res) => {
  // console.log(as);
  res.clearCookie("token")
  return res.status(200).json({ message: "Succefully Logged out" });
})


export const sendOtp = tryCatch((req, res) => {
  const otp = sendMessage(parseInt(req.query.mobile))
  // const otp = Math.floor(Math.random() * 9000) + 1000;
  console.log(otp);
  return res.status(200).json({ otp });
});

const sendMessage = function (mobile) {
  let randomOTP = Math.floor(Math.random() * 9000) + 1000;
  var options = {
    authorization: process.env.SMS_API,
    message: `ARTISTO CLUB \n your OTP verification code is ${randomOTP}`,
    numbers: [mobile],
  };
  fast2sms
    .sendMessage(options)
    .then((res) => {
      console.log("otp sent successfully", res);
    })
    .catch((error) => {
      console.log(error);
    });
  return randomOTP;
};


export const profileUpdate = tryCatch(async(req,res)=>{
    const {name,phone,email} = req.body
    console.log(req.id);
    const data = await User.findByIdAndUpdate(req.id,{ $set: { name: name, phone: phone, email: email } },{ new: true });
   return res.status(200).json({data})
})


export const chooseLanguage = tryCatch(async(req,res)=>{
  const {nativeLanguage,selectedLanguage} = req.body

  let data = await User.updateOne({$set:{nativeLanguage:nativeLanguage,lernningLanguage:selectedLanguage}})
  console.log("data",data);
})

export const searchTrainer = tryCatch(async(req,res)=>{
  // const search = req.body.searchField
  const {searchField,currentPage,UserEmail} = req.body
  // console.log("anss",UserEmail);
  // console.log("ans",req.id,req.email)
  const trainer = {email:{$ne:UserEmail},name:{$regex: searchField, $options:"i"}} //this is for to take the data of trainer avoiding the current user and it is also doing searching
  
  
  let cardPerPage = 3
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const data = await TrainerModel.find(trainer).skip(indexOfFirstCard).limit(indexOfLastCard - indexOfFirstCard);
  const count = await TrainerModel.find(trainer).count()
  return res.status(200).json({data,count})
})





