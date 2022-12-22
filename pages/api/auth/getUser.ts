import type { NextApiRequest, NextApiResponse } from "next";
import User from "models/User";
import { getToken } from "next-auth/jwt";
import dbConnect from "lib/dbConnect";

const secret = process.env.NEXTAUTH_SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req, secret });
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const { username } = token.user;
        const user = await User.findOne({ username });

        const outputUser = {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
        };

        return res.status(200).json({ status: 200, user: outputUser });
      } catch (error) {
        return res.status(200).json({ status: 400 });
      }

    default:
      return res.status(400).json({ success: false });
  }
};
