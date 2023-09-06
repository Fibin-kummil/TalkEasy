import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commanSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin', 'trainer'],
        default: 'user'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'Trainer'
    },
    profilePic:{
        type:String,
      }
})

export default mongoose.model('Base', commanSchema);
