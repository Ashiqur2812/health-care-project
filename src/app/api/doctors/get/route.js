import { connectMongodb } from "../../../../../lib/mongodb";
import { DoctorModel } from "../../../../../model/doctorsModel/doctorsModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectMongodb();
  const result = await DoctorModel.find();
  return NextResponse.json(result);
};
