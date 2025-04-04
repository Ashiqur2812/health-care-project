import mongoose from "mongoose";
import { NextResponse } from "next/server";

import { BlogModel } from "../../../../../model/blogModel/blogModel";
import { connectMongoString } from "../../../../../lib/mongodb";

export const POST = async (req) => {
  const payload = await req.json();
  console.log(payload);
  await mongoose.connect(connectMongoString);
  const result = new BlogModel(payload);
  await result.save();
  return NextResponse.json({ success: true, status: 200 });
};
