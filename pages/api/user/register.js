import dbConnect from "utils/dbConnect";
import User from "models/User";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
          username,
          hash: hashedPassword,
        });

        await user.save();

        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
