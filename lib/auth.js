import axios from "axios";

export const loginUser = async (username, password) => {
  const { data } = await axios.post("/login", { username, password });
  console.log(data);
};

const passport = require("koa-passport");
const LocalStrategy = require("passport-local").Strategy;

const fetchUser = (() => {
  // This is an example! Use password hashing in your project and avoid storing passwords in your code
  const user = { id: 1, username: "test", password: "test" };
  return async function () {
    return user;
  };
})();

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await fetchUser();
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new LocalStrategy(function (username, password, done) {
    fetchUser()
      .then((user) => {
        if (username === user.username && password === user.password) {
          done(null, user);
        } else {
          done(null, false);
        }
      })
      .catch((err) => done(err));
  })
);
