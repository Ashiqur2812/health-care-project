import mongoose from "mongoose";

// import { BlogModel } from "../../../../../model/blogModel/blogModel";
import { NextResponse } from "next/server";
// import { connectMongodb } from "/lib/mongodb";
import { BlogModel } from "/model/blogModel/blogModel";
import { connectToDatabase } from "/lib/mongodb";

export const GET = async () => {
  await connectToDatabase();
  const result = await BlogModel.find();
  return NextResponse.json(result);
};
