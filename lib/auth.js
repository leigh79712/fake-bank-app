const User = require("../models/user");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

passport.use(
  new localStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) throw err;
      if (!user) return done(null, false);
    });
  })
);
