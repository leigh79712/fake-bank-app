const express = require("express");
const next = require("next");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const cors = require("cors");
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

const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
};
app.prepare().then(() => {
  const server = express();

  server.use(session(CONFIG));
  server.use(cors({ origin: "http://localhost:3000", credential: true }));

  server.use(express.urlencoded({ extended: true }));
  server.use(passport.initialize());
  server.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  server.post(
    "/login",
    passport.authenticate("local", {
      failureRedirect: "/login",
    }),
    (req, res) => {
      console.log(req.body);
      console.log(req.user);
      res.redirect("/");
    }
  );

  server.get((req, res) => {
    req.logout();
    res.redirect("/");
  });

  server.all("(*)", async (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
