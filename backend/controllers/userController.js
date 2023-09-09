import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import fast2sms from "fast-two-sms";
import { tryCatch } from "../utils/tryCatch.js";
import "dotenv/config";

export const signup = tryCatch(async (req, res) => {
  const { name, email, password, phone } = req.body;
  let existingUser = await User.findOne({ email: email });
  if (existingUser) {
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
  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
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
  // const otp = sendMessage(parseInt(req.query.mobile))
  const otp = Math.floor(Math.random() * 9000) + 1000;
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
