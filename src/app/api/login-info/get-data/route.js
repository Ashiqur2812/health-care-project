import mongoose from "mongoose";
import { connectMongodb } from "../../../../../lib/mongodb";
import { usersModel } from "../../../../../model/userModel/newUser";
import { NextResponse } from "next/server";

export const GET = async () => {
  await mongoose.connect(connectMongodb);
  const getPostData = await usersModel.find();
  return NextResponse.json(getPostData);
};
