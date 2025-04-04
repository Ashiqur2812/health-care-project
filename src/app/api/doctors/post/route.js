import { DoctorModel } from "../../../../../model/doctorsModel/doctorsModel";
import { NextResponse } from "next/server";
import { connectMongoString } from "../../../../../lib/mongodb";

//create post route in doctors
export const POST = async (req) => {
  const payload = await req.json();
  await connectMongoString();
  const result = new DoctorModel(payload);
  await result.save();
  return NextResponse.json({ success: true, status: 200 });
};
