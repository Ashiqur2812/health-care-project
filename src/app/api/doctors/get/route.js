import { NextResponse } from "next/server";
import { DoctorModel } from "../../../../../model/doctorsModel/doctorsModel";
import { connectMongoString } from "../../../../../lib/mongodb";

export const GET = async () => {
  await connectMongoString();
  const result = await DoctorModel.find();
  return NextResponse.json(result);
};
