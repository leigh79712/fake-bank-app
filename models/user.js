const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  movements: Array,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
