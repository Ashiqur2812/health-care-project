import { NextResponse } from "next/server";
import booking from "../../../../model/booking";
import connectMongodb from "../../../../lib/mongodb";
//  this is post requse for appoinmnet
export async function POST(request) {
  try {
    const data = await request.json();
    const { name, number, reason, department, preferDate, time } = data;
    // checking data for validation
    // if(!name || !number || !department || !preferDate){
    //     return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    // }
    // connection to mongodb
    await connectMongodb();

    // chekcing already booked or not
    // const alreadyBooked = await booking.findone({name, preferDate})
    // if(!alreadyBooked){
    //     return NextResponse.json({ error: "All ready Booked By this name" }, { status: 400 });
    // }
    // now create booking
    const newBooking = await booking.create({
      name,
      number,
      reason,
      department,
      preferDate,
      time,
    });
    return NextResponse.json(
      { success: "Booking success", booking: newBooking },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking Error:", error);
    return NextResponse.json({ error: "Booking failed" }, { status: 500 });
  }
}

// this is get request for the appoinments

export const GET = async (req) => {
  try {
    await connectMongodb(); // ✅ Fixed missing await
    const allAppointments = await booking.find(); // ✅ Fixed incorrect variable
    return NextResponse.json(allAppointments, { status: 200 });
  } catch (error) {
    console.error("Fetching appointments error:", error);
    return NextResponse.json(
      { error: "Failed to fetch appointments" },
      { status: 500 }
    );
  }
};


