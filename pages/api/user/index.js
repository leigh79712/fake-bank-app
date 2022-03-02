const User = require("../../../models/user");

export default async function handler(req, res) {
  if (req.method === "GET") {
    const user = req.user;
    res.status(200).json(user);
  }

  if (req.method === "POST") {
    const { firstname, lastname, username, password, email } = req.body;
    const user = new User({ username, email, firstname, lastname });
    const registeredUser = await User.register(user, password);
    // req.flash("success", "Successfully made a new campground");
    res.redirect("/");
  }
}
