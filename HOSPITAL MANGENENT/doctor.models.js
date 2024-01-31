import mongose from "mongoose"
const doctorSchema = new mongose.Schema({},{timestamps:true})
export const Doctor = mongose.model("Doctor",doctorSchema)