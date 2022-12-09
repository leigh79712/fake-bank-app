import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import dbConnect from "utils/dbConnect";
import { sessionOptions } from "utils/session";
import User from "models/User";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

const loginRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { username, password } = req.body;

        const user = await User.findOne({ username }).populate("hash");

        if (!user) {
          return res.status(200).json({
            status: 400,
            type: "username",
            message: "noUsername",
          });
        }

        const verification = await bcrypt.compare(password, user.hash);

        if (verification) {
          // const Secret = process.env.TOKEN_KEY || "secret";
          // const token = jwt.sign(
          //   {
          //     username: user.username,
          //   },
          //   Secret,
          //   { expiresIn: "14d" }
          // );

          req.session.user = user;
          await req.session.save();

          res.status(200).json({
            user,
          });

          res.redirect("/dashboard");
        } else {
          return res.json({
            status: 400,
            type: "password",
            message: "errorPassword",
          });
        }
      } catch (error) {
        return res.status(400).json({ success: false });
      }

    default:
      return res.status(400).json({ success: false });
  }
};

export default withIronSessionApiRoute(loginRoute, sessionOptions);
