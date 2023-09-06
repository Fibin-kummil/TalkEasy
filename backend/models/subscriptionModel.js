import mongoose from "mongoose";
import { validate } from "./userModel";
const Schema = mongoose.Schema
 
const subscriptionSchema = new Schema({
   name:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   validity:{
    type:Date,
    required:true
   },
   amount:{
    type:Number,
    required:true,
   },
   feature:{
    type:String,
    required:true
   }
})

module.exports = mongoose.model('Subscribe',subscriptionSchema)
 

