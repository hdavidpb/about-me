import mongoose from "mongoose"

const MONGO_URL = process.env.MONGODB_URL!

export async function connectDB (){
    await mongoose.connect(MONGO_URL);
}