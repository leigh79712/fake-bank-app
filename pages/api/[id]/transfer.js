const User = require("../../../models/user");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.user;
    const user = await User.findById(id);
    const transferTo = await User.findOne({ username: req.body.username });
    const { amount } = req.body;
    const movement = {
      type: "Transfer to " + req.body.username,
      amount: -amount,
      date: new Date(),
    };
    const transferMovement = {
      type: "Transfer from " + req.user.username,
      amount: +amount,
      date: new Date(),
    };
    transferTo.movements.push(transferMovement);
    user.movements.push(movement);
    transferTo.save();
    user.save();
    console.log(user);
    res.send(transferTo);
  }
}
