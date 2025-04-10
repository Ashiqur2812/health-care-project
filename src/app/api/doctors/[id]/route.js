import { NextResponse } from "next/server";
import { DoctorModel } from "/model/doctorsModel/doctorsModel";
// import { connectMongodb } from "/lib/mongodb";
import mongoose from "mongoose";
import { connectToDatabase } from "/lib/mongodb";

export const GET = async (req, { params }) => {
  console.log("this is id:", params);
  try {
    await connectToDatabase();
    const findid = params?.id;
    console.log("this is findid:", findid);

    const doctor = await DoctorModel.findById(findid);
    // if (!doctor) {
    //     return NextResponse.json(
    //       { message: "Doctor not found" },
    //       { status: 404 }
    //     );
    //   }
    return NextResponse.json(doctor);
  } catch (error) {
    // Handle errors (like invalid ObjectId format)
    return NextResponse.json(
      { message: "Error fetching doctor", error: error.message },
      { status: 500 }
    );
  }
};
