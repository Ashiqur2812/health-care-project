import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  image: String,
  date: String,
  description: String,
});

export const BlogModel =
  mongoose.models.blog || mongoose.model("blog", BlogSchema);
