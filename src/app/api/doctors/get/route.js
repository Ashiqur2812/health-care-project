import connectMongodb from "../../../../../lib/mongodb";
import { NextResponse } from "next/server";
import { DoctorModel } from "../../../../../model/doctorsModel/doctorsModel";

export const GET = async () => {
  await connectMongodb();
  const result = await DoctorModel.find();
  return NextResponse.json(result);
};
