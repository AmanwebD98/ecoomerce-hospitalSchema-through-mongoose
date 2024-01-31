import mongoose from "mongoose"
const patientSchema = new mongoose.Schema({
  name:{
    type:string,
    required:true
  },
  diagnosedWith:{
    type:string,
    required:true
  },
  address:{
    type:string,
    required:true
  },
  age:{
    type:string,
    required:true
  },
  bloodgroup:{
    type:string,
    required:true
  },
  gender:{
    type:String,
    enum:["M","F","Other"]
  },
  admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }
},{timestamps:true})
export const Patient = mongoose.model("Patient",patientSchema)