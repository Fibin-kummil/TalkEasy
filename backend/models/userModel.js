
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'


const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
      type:Number,
      required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:3 
    },
    profilePic:{
      type:String,
    },
    role:{
      type:String,
      required:true,
      enum: ['user', 'admin','trainer'],
      default:'user'
    },
    trainer:{
      type:String,
    },
    block:{
      type:Boolean
    },
    notification:{
      type:Array
    },
    nativeLanguage:{
      type:String,
    },
    lernningLanguage:{
      type:String,
    }
})
// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
// Match user entered password to hashed password in database
userSchema.methods.matchPasswords = async function (enteredPassword) {
    try {
      return await bcrypt.compare(String(enteredPassword), this.password);
    } catch (error) {
      throw new Error('Error comparing passwords: ' + error.message);
    }
  }; 

export default mongoose.model('User',userSchema);