import mongoose from "mongoose" 
 const connect = () => {
    mongoose.connect(process.env.MONGODB).then(()=>{
    console.log('Database connected')
  }).catch((err) => console.log(err))
 }

 export default connect
 

 