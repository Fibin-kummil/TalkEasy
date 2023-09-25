import mongoose from "mongoose";


const Schema = mongoose.Schema
const temporarySchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true
  },
  users: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
    }
  ],
  adminVerified:{
    type:Boolean,
    // required:true
  },
  details:{
    type:String,
    // required:true
  },
  certificate:[{
    type:String,
    required:true
  }],
  language:{
    type:Array,
    required:true
  },
  role:{
    type:String,
    default:"trainer",
  },
})

export default mongoose.model("Temporary",temporarySchema)


