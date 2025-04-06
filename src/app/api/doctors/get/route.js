import { NextResponse } from "next/server";
import { DoctorModel } from "../../../../../model/doctorsModel/doctorsModel";
import { connectMongoString } from "../../../../../lib/mongodb";
import mongoose from "mongoose";

export const GET = async () => {
  await mongoose.connect(connectMongoString);
  const result = await DoctorModel.find();
  return NextResponse.json(result);
};
