import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  phone: {type: Number, required: true},
  id: {type: String},
  isAdmin:{type: Boolean, required:true, default:true}
});

export default mongoose.model("Admin", AdminSchema);