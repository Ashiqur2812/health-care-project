// import mongoose from "mongoose";

// export const connectMongodb = `mongodb+srv://${process.env.mongodbAdmin}:${process.env.password}@cluster0.jds8f.mongodb.net/healtcareDatabase?retryWrites=true&w=majority&appName=Cluster0`;

// export default async function connectMongodb() {
//   try {
//     if (mongoose.connection.readyState === 0) {
//       await mongoose.connect(connectMongodb, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log("Connected to MongoDB");
//     }
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error; // Re-throw the error to be caught by the caller
//   }
// }

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env.local file");
}

let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGODB_URI, {})
            .then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    console.log("✅ MongoDB Connected Successfully!");
    return cached.conn;
}
