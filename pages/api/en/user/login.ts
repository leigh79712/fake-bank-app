import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "utils/dbConnect";
import User from "models/User";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { username, password } = req.body;

        const user = await User.findOne({ username }).populate("hash");

        if (!user) {
          return res.json({
            status: 400,
            type: "username",
            message: "User not found.",
          });
        }

        const verification = await bcrypt.compare(password, user.hash);

        if (verification) {
          return res.status(200).json({ user });
        } else {
          return res.json({
            status: 400,
            type: "password",
            message: "Wrong password.",
          });
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
