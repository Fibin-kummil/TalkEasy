import mongoose from "mongoose";

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  admin: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],  // take the data from the user schema giveing the ref like this (populate for that)

  maxPeople: {
    type: Number,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  Level: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Room", roomSchema);
