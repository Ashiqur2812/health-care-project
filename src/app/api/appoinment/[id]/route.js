// this is delete and update route for appointment

import { NextResponse } from "next/server";
import connectMongodb from "/lib/mongodb";
import booking from "/model/booking";
// import booking from "../../../../../model/booking";

// 1. create the delete method : (done)
// 2.create update method

// this is delete request function
export const DELETE = async (req, { params }) => {
  try {
    // connect mongoose
    await connectMongodb();
    // destructure the id
    const { id } = params;
    // now delete it
    const dltAppoinment = await booking.findByIdAndDelete(id);
    // return the respones
    return NextResponse.json(
      ({ success: "Appointment deleted successfully" }, { status: 200 })
    );
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json(
      { error: "Failed to delete appointment" },
      { status: 500 }
    );
  }
};

// this is update data route function

export const PATCH = async (req, { params }) => {
  try {
    await connectMongodb();

    const { id } = params;
    // get the updated data from the req
    const changedData = await req.json();
    // now update the data into database
    const updatedData = await booking.findByIdAndUpdate(id, changedData, {
      new: true, //its return the updated data
      runValidators: true, // its ensure the update data follow schema validation
    });
    return NextResponse.json(
    
      { success: "Appointment updated successfully", booking: updatedData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json(
      { error: "Failed to update appointment" },
      { status: 500 }
    );
  }
};
