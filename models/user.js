const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  movements: Array,
  movementsDate: Array,
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
