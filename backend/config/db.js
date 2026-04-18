import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('databse connected successfully'.underline.green)
    }
    catch(error){
        console.log(`database connection failed ${error.message}`.underline.red)
    }
}

export default connectDB