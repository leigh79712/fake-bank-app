const express = require("express");
const next = require("next");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const User = require("../models/user");

const port = 3000;
const dev = "development";
const app = next({ dev });
const handle = app.getRequestHandler();

const mongoose = require("mongoose");
// const MongoStore = require("connect-mongo");
const mongo_Url =
  "mongodb+srv://dbUser:W7aMnwMsSSGDcBBF@cluster0.6epjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(mongo_Url)
  .then(() => {
    console.log("Connection open");
  })
  .catch((err) => {
    console.log(err);
  });
// const authenticate = (username, password) => {};

app.prepare().then(() => {
  const server = express();
  const secret = process.env.SECRET || "thisshouldbeabettersecret!";
  const CONFIG = {
    name: "secsion",
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      // secure: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  };

  server.use(session(CONFIG));

  require("../lib/authPassport");
  server.use(passport.initialize());
  server.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  server.post("/register", async (req, res) => {
    const { firstname, lastname, username, password, email } = ctx.request.body;
    const user = new User({ username, email, firstname, lastname });
    const registeredUser = await User.register(user, password);
    console.log(user);
  });

  server.post(
    "/login",
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    (req, res) => {
      const { username, password } = req.body;
      res.send("hi");
    }
  );

  server.all("(*)", async (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
