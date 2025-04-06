import mongoose from "mongoose";
import { NextResponse } from "next/server";

import { BlogModel } from "../../../../../model/blogModel/blogModel";
import { connectMongodb } from "../../../../../lib/mongodb";

export const POST = async (req) => {
  const payload = await req.json();
  await mongoose.connect(connectMongodb);
  const result = new BlogModel(payload);
  await result.save();
  return NextResponse.json({ success: true, status: 200 });
};
