import mongoose from "mongoose";


export const OrdersSchema = new mongoose.Schema({
  reference_id: String,
  consultType: String,
  link_id: String,
  transaction_id: String,
  total: Number,
  subtotal: Number,
  description: String,
  payment_method: String,
  payer_email: String,
  transaction_date: String,
  payment_status: String,
});

export default mongoose.models.Orders || mongoose.model("Orders", OrdersSchema);