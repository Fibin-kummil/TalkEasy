import mongoose from "mongoose";
import bcrypt from 'bcryptjs'



const Schema = mongoose.Schema
const trainerSchema = new Schema({
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
  users:{
    type:Array,
  },
  // users: [
  //   {
  //     user: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "User",
  //     }
  //   }
  // ],
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


trainerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
// Match user entered password to hashed password in database
trainerSchema.methods.matchPasswords = async function (enteredPassword) {
  try {
    return await bcrypt.compare(String(enteredPassword), this.password);
  } catch (error) {
    throw new Error('Error comparing passwords: ' + error.message);
  }
};




export default mongoose.model("Trainer",trainerSchema)


