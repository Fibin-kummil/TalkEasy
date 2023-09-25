import "dotenv/config";
import { tryCatch } from "../utils/tryCatch.js";
import Room from "../models/roomModel.js";
import User from "../models/userModel.js";

export const RoomData = tryCatch(async (req, res) => {
  console.log(12);
  const { topic, maxPeople, language, Level, admin, username } = req.body;
  const room = new Room({ topic, maxPeople, language, Level, admin, username });
  await room.save();
  return res.status(200).json({ message: "Succefully Room Created" });
});

export const getRooms = tryCatch(async (req, res) => {
  const data = await Room.find().populate('members'); // this is used to take user name from the user schemam 
  console.log("hello",data);
  return res.status(200).json({ message: "data fetched successfully", data });
})

export const roomActive = tryCatch(async (req, res) => {
    console.log(req.body);
    const { userID, roomID, state } = req.body;
    // const query = [];
    if (roomID === userID) {
     
      if (state) {
        await Room.updateOne(
          { admin: roomID },
          { $set: { isActive: state } ,
           $push: { members: userID } },
        );
      } else {
        await Room.updateOne(
          { admin: roomID },
          { $set: { isActive: state } ,
           $pull: { members: userID } },
        );
      }
    } else {
      if (state) {
        await Room.updateOne({ admin: roomID }, { $push: { members: userID } });
      } else {
        await Room.updateOne({ admin: roomID }, { $pull: { members: userID } });
      }
    }
  });


  export const deleteMyRoom = tryCatch(async(req,res)=>{

     const {myGrp_id} = req.body
     await Room.deleteOne({admin:myGrp_id})
     return res.status(200).json({ message: "successfully delectedd" });

  })




