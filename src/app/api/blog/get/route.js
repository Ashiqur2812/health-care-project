import mongoose from "mongoose";
import { connectMongodb } from "../../../../../lib/mongodb";
import { BlogModel } from "../../../../../model/blogModel/blogModel";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  await mongoose.connect(connectMongodb);
  const result = await BlogModel.find();
  return NextResponse.json(result);
};
