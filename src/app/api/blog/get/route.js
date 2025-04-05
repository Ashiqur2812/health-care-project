import { connectMongoString } from "../../../../../lib/mongodb";
import { BlogModel } from "../../../../../model/blogModel/blogModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectMongoString()
  const result = await BlogModel.find();
  return NextResponse.json(result);
};
