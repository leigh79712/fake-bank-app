import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "lib/dbConnect";
import User from "models/User";
import bcrypt from "bcrypt";

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        // const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{6,30}$/;

        // if (!regex.test(password)) {
        //   res
        //     .status(200)
        //     .json({ status: 400, type: "password", message: "wrongFormat" });
        // }

        const user = new User({
          username,
          hash: hashedPassword,
        });

        user.save();
        return res.status(200).json({ status: 200 });
      } catch (error) {
        return res
          .status(200)
          .json({ status: 400, type: "username", message: "hadUsername" });
      }

    default:
      return res.status(400).json({ success: false });
  }
};

export default register;
