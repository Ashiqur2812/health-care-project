import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  descriptions: { type: String, required: true },
  image: { type: String, required: true },
  degree: { type: [String], required: true },
  experience: { type: [String], required: true },
  category: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  day: { type: String, required: true },
  hour: { type: String, required: true },
});

export const DoctorModel =
  mongoose.models.doctor || mongoose.model("doctor", DoctorSchema);
