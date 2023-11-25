const User = require("../../../models/User");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.user;
    const { amount } = req.body;
    const user = await User.findById(id);

    const movement = {
      type: "withdrawal",
      amount: -amount,
      date: new Date(),
    };

    await user.movements.push(movement);
    await user.save();
  }
}
