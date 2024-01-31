import mongoose from "mongoose"
const orderItemschema= new mongoose.Schema({
productId:{
  type:mongoose.Schema.types.ObjectId,
  ref:"Product"
},
quantity:{
  type:Number,
  required:true
}
})
const orderSchema = new mongoose.Schema({
  orderPrice:{
    type:Number,
    required:true
  },customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"

  },
  orderItems:{
    type:{orderItemschema}
  },address:{
    type:string,
    required:true
  },status:{
    type:string,
    enum:["PENDING","CANCELLED","DELIVERED"],
    default:"PENDING"
  }
},{timestamps:true})
export const Order = mongoose.model("order",orderSchema)