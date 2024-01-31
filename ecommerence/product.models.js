import mongoose from "mongoose"
import { Category } from "./category.models"
const productSchema= new mongoose.Schema({
  discription:{
    type:string,
    require:true
    
  },
  name:{
    type:string,
    required:true
  },
  productImage:{
  type:string,

  },
  price:{
    type:number,
    defaolt:0
    
  },
  stocks:{
    default:0,
    type:Number
  },
  Category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
  },
  Owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }

},{timestamps:true})
export const Product =mongoose.model("Product",productSchema)