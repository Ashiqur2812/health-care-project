// here we will create schema of users data
import mongoose from "mongoose"
const newUserSchema = new mongoose.Schema(
    {
        userName : {type: String, require: true},
        userEmail : {type: String, require: true},
    }
)
// checking shcema has or not and export schema variables 
const usersModel = mongoose.models.newUsers || mongoose.model("newUsers",newUserSchema)
export  default newUserSchema;