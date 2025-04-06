// import mongoose from "mongoose";

export const connectMongodb = `mongodb+srv://${process.env.mongodbAdmin}:${process.env.password}@cluster0.jds8f.mongodb.net/healtcareDatabase?retryWrites=true&w=majority&appName=Cluster0`;

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
