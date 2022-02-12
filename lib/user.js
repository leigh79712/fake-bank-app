import User from "../../models/User";

export default async function handler(ctx) {
  const { method } = ctx;

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        ctx.status(200).json({ success: true, data: users });
      } catch (error) {
        ctx.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await User.create(req.body);
        ctx.status(201).json({ success: true, data: user });
      } catch (error) {
        ctx.status(400).json({ success: false });
      }
      break;
    default:
      ctx.status(400).json({ success: false });
      break;
  }
}
