import mongoose from "mongoose";
import { connectMongodb } from "/lib/mongodb";
import { NextResponse } from "next/server";
import newUser from "/model/newUser";

export const GET = async () => {
  await mongoose.connect(connectMongodb);
  const getPostData = await newUser.find();
  return NextResponse.json(getPostData);
};
