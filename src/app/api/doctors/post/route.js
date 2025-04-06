import { DoctorModel } from "../../../../../model/doctorsModel/doctorsModel";
import { NextResponse } from "next/server";
import { connectMongoString } from "../../../../../lib/mongodb";
import mongoose from "mongoose";

//create post route in doctors
export const POST = async (req) => {
  const payload = await req.json();
  await mongoose.connect(connectMongoString);
  const result = new DoctorModel(payload);
  await result.save();
  return NextResponse.json({ success: true, status: 200 });
};
