import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../../lib/mongodb";
import { usersModel } from "../../../../../model/userModel/newUser";

export const POST = async (req) => {
  const payload = await req.json();
  await mongoose.connect(connectMongodb);
  const newPost = new usersModel(payload);
  await newPost.save();
  return NextResponse.json({ massage: "success" }, { status: 200 });
};
