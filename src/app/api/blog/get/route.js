import mongoose from "mongoose";

import { BlogModel } from "../../../../../model/blogModel/blogModel";
import { NextResponse } from "next/server";
import { connectMongoString } from "../../../../../lib/mongodb";

export const GET = async () => {
  await mongoose.connect(connectMongoString);
  const result = await BlogModel.find();
  return NextResponse.json(result);
};
