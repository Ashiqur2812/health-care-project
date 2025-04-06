import { NextResponse } from "next/server";
// import { DoctorModel } from "../../../../../model/doctorsModel/doctorsModel";
// import { connectMongodb } from "../../../../../lib/mongodb";
import mongoose from "mongoose";
import { connectMongodb } from "/lib/mongodb";
import { DoctorModel } from "/model/doctorsModel/doctorsModel";

export const GET = async () => {
  await mongoose.connect(connectMongodb);
  const result = await DoctorModel.find();
  return NextResponse.json(result);
};

