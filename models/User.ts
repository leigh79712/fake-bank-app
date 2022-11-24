import mongoose from "mongoose";
// const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// UserSchema.plugin(passportLocalMongoose);
export default mongoose.models.User || mongoose.model("User", UserSchema);
