import mongoose from "mongoose";

const ServicesSchema = new mongoose.Schema({
    consultType: String,
    price: Number,
    description: String,
  
});

export default mongoose.models.Services ||
  mongoose.model("Services", ServicesSchema);
