import { NextResponse } from "next/server";
import newUser from "../../../../model/newUser";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "/lib/mongodb";

export async function POST(request) {
  try {
    // Connect to MongoDB
    await connectToDatabase();
    
    // Parse the request body safely
    const body = await request.json();
    const { email, password, name } = body;

    // if (!email || !password || !name) {
    //   return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    // }


    // Check if user already exists
    const existingUser = await newUser.findOne({ email }); // FIXED findOne()
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 6);

    // Create new user
    const createdUser = await newUser.create({
      email,
      password: hashedPassword,
      name,
    });

    return NextResponse.json({ success: true, user: createdUser }, { status: 201 });
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
