import { NextResponse } from "next/server";
// import { DoctorModel } from "../../../../../model/doctorsModel/doctorsModel";
// import { connectMongodb } from "../../../../../lib/mongodb";
// import mongoose from "mongoose";
// import { connectMongodb } from "/lib/mongodb";
import { DoctorModel } from "/model/doctorsModel/doctorsModel";
import { connectToDatabase } from "/lib/mongodb";

export const GET = async () => {
  await connectToDatabase()
  const result = await DoctorModel.find();
  return NextResponse.json(result);
};

