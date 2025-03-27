// here we will create schema of users data
import mongoose from "mongoose";
const newUserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
});
// checking shcema has or not and export schema variables
export const usersModel =
  mongoose.models.newUsers || mongoose.model("newUsers", newUserSchema);
