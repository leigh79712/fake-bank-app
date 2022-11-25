import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: { type: String, required: true, unique: true },
  email: String,
});

UserSchema.plugin(passportLocalMongoose);
export default mongoose.models.User || mongoose.model("User", UserSchema);
