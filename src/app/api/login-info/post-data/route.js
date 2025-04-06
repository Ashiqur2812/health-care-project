import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectMongoString } from "../../../../../lib/mongodb";
import newUser from "../../../../../model/newUser";

export const POST = async (req) => {
  const payload = await req.json();
  await mongoose.connect(connectMongoString);
  const newPost = new newUser(payload);
  await newPost.save();
  return NextResponse.json({ massage: "success" }, { status: 200 });
};
