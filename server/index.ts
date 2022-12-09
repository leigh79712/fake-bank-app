import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";

const server = async () => {
  const app = express();

  mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => {
      console.log("Connection open");
    })
    .catch((err) => {
      console.log(err);
    });

  app.use(cors({ origin: "http://localhost:3000", credentials: true }));

  app.use(
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

  app.listen(3000, () => {
    console.log("Server started on localhost: 3000");
  });
};

server().catch((err) => {
  console.error(err);
});
