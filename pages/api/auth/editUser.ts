import type { NextApiRequest, NextApiResponse } from "next";
import User from "models/User";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req, secret });
  const { method } = req;
  const { username } = token.user;

  if (method === "POST") {
    const { firstName, lastName, email } = req.body;

    await User.updateOne(
      { username },
      {
        $set: {
          firstName,
          lastName,
          email,
        },
      }
    );

    return res.end();
  }
};
