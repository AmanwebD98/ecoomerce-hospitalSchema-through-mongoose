import mongoose from "mongoose"
const categorySchema= new mongoose.Schema({
  name:{
    type:string,
    required:true
  }
},{timestamps:true})
export  const Category = mongoose.Model("Category",categorySchema)