import mongoose from "mongoose"
const medicalRecordsschema = new mongoose.Schema({},{timestamps:true})
export const medicalRecords = mongoose.model("medicalRecords",medicalRecords)