import mongoose from "mongoose"
 const userSchma = new mongoose.Schema({
   username:{
     type:string,
     required:true,
     uppercase:true,
     unique:true
   },
   email:{
    type:string,
    required:true,
    uppercase:true,
    unique:true
  },
  password:{
    type:string,
    required:true
  }
 },{timestamps:true})
 export const user =mongoose.model("user",userSchma)