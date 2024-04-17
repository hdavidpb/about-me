import mongoose from "mongoose";


export const OrdersSchema = new mongoose.Schema({
  reference_id: String,
  documentType:String,
  documentNumber:String,
  consultType: String,
  name:String,
  link_id: String,
  transaction_id: String,
  total: Number,
  subtotal: Number,
  description: String,
  payment_method: String,
  payer_email: String,
  transaction_date: {
    type:Date,
    default:new Date()
  },
  payment_status: String,
  isUpdated:{
    type:Boolean,
    default:false
  }
});

export default mongoose.models.Orders || mongoose.model("Orders", OrdersSchema);