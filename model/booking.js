import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name: { type: String, require: true},
    number: { type: Number, require:true },
    reason: {type: String},
    department:{type:String, require:true},
    preferDate:{type:String},
    time:{type:String}
})

export default mongoose.model.appoinments || mongoose.model('appoinments', bookingSchema)