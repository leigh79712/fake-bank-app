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
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
          username,
          hash: hashedPassword,
        });

        await user.save();
      } catch (error) {
        res
          .status(200)
          .json({ status: 400, username: error.keyPattern.username });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
