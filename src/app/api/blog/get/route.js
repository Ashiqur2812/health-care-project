import mongoose from "mongoose";

// import { BlogModel } from "../../../../../model/blogModel/blogModel";
import { NextResponse } from "next/server";
import { connectMongodb } from "/lib/mongodb";
import { BlogModel } from "/model/blogModel/blogModel";

export const GET = async () => {
  await mongoose.connect(connectMongodb);
  const result = await BlogModel.find();
  return NextResponse.json(result);
};
