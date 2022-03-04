const User = require("../../../models/user");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.user;
    const user = await User.findById(id);
    const { amount } = req.body;
    const movement = {
      type: "deposit",
      amount: amount,
      date: new Date(),
    };
    user.movements.push(movement);
    user.save();
    res.send(user);
  }
}
