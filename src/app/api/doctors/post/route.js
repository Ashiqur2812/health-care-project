import mongoose from "mongoose";
import { connectMongodb } from "../../../../../lib/mongodb";
import { DoctorModel } from "../../../../../model/doctorsModel/doctorsModel";
import { NextResponse } from "next/server";

//create post route in doctors
export const POST = async (req) => {
  const payload = await req.json();
  console.log(payload);
  await mongoose.connect(connectMongodb);
  const result = new DoctorModel(payload);
  await result.save();
  return NextResponse.json({ success: true, status: 200 });
};
