import mongoose from "mongoose";
// const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  id: { type: Number, require: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: String,
  lastname: String,
  email: { type: String, required: true, unique: true },
  movements: Array,
});

// UserSchema.plugin(passportLocalMongoose);
export default mongoose.models.User || mongoose.model("User", UserSchema);
