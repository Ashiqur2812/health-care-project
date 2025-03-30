import mongoose from "mongoose";
import { connectMongodb } from "../../../../../lib/mongodb";
import { NextResponse } from "next/server";
import { BlogModel } from "../../../../../model/blogModel/blogModel";

export const POST = async (req) => {
  const payload = await req.json();
  console.log(payload);
  await mongoose.connect(connectMongodb);
  const result = new BlogModel(payload);
  await result.save();
  return NextResponse.json({ success: true, status: 200 });
};
