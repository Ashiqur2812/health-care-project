import mongoose from "mongoose";
import { NextResponse } from "next/server";
import newUser from "/model/newUser";
import { connectToDatabase } from "/lib/mongodb";

export const GET = async () => {
  await connectToDatabase();
  const getPostData = await newUser.find();
  return NextResponse.json(getPostData);
};
