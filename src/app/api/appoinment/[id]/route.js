// this is delete and update route for appoinment 

import { NextResponse } from "next/server";
import connectMongodb from "../../../../../lib/mongodb"
import booking from "../../../../../model/booking";

// 1. create the delete method 
// 2.create update method

export const DELETE = async (req,{params}) => {
    try {
        // connect mongoose
        await connectMongodb()
        // destructure the id
        const{id} = params;
        // now delete it
        const dltAppoinment = await booking.findByIdAndDelete(id)
        // return the respones
        return NextResponse.json(({success:"Appointment deleted successfully"}, {status:200}))
    } catch (error) {
        console.error("Delete Error:", error);
        return NextResponse.json({ error: "Failed to delete appointment" }, { status: 500 });
    }
}