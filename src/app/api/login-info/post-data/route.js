import mongoose from "mongoose";
import { NextResponse } from "next/server";
// import { connectMongodb } from "/lib/mongodb";
import newUser from "/model/newUser";
import { connectToDatabase } from "/lib/mongodb";

export const POST = async (req) => {
  const payload = await req.json();
  await connectToDatabase();
  const newPost = new newUser(payload);
  await newPost.save();
  return NextResponse.json({ massage: "success" }, { status: 200 });
};
