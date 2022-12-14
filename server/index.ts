import express from "express";
import next from "next";
import session from "express-session";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  dotenv.config({ path: ".env.local" });

  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => {
      console.log("Connection open");
    })
    .catch((err) => {
      console.log(err);
    });

  server.use(cors({ origin: "http://localhost:3000", credentials: true }));

  server.use(
    session({
      name: "uid",
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14, // 2 weeks
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: process.env.NODE_ENV === "production", // cookie only works in https
        domain:
          process.env.NODE_ENV === "production" ? ".codeponder.com" : undefined,
      },
      saveUninitialized: true,
      secret: process.env.SECRET as string,
      resave: false,
    })
  );

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, () => {
    console.log("Server started on localhost: 3000");
  });
});
