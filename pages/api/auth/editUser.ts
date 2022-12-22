import type { NextApiRequest, NextApiResponse } from "next";
import User from "models/User";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req, secret });
  const { method } = req;
  const { username } = token.user;

  if (method === "POST") {
    const { firstname, lastname, email } = req.body;

    await User.updateOne(
      { username },
      {
        $set: {
          firstname,
          lastname,
          email,
        },
      }
    );

    return res.end();
  }
};
