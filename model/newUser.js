// here we will create schema of users data
import mongoose from "mongoose";
const newUserSchema = new mongoose.Schema({
  name: { type: String},
  email: { type: String, require: true, unique: true },
  password: {type: String},
  role:{type:String, default:'patient'}
});
// checking schema has or not and export schema variables
// export const usersModel =
//   mongoose.models.newUsers || mongoose.model("newUsers", newUserSchema);
  export default mongoose.model.newUser || mongoose.model('newUser', newUserSchema);