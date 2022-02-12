const Koa = require("koa");
const next = require("next");
const Router = require("@koa/router");
const json = require("koa-json");
const bodyParser = require("koa-bodyparser");
const passport = require("koa-passport");
const session = require("koa-session");
const User = require("../models/user");

const port = 3000;
const dev = "development";
const app = next({ dev });
const handle = app.getRequestHandler();

// const User = require("../models/user");
const mongoose = require("mongoose");
const { authenticate } = require("passport");
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
  const server = new Koa();
  const router = new Router();

  server.keys = ["your-session-secret"];
  server.use(session({}, server));

  server.use(bodyParser());
  server.use(json());

  require("../lib/authPassport");
  server.use(passport.initialize());
  server.use(passport.session());

  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  router.post("/register", async (ctx) => {
    const { firstname, lastname, username, password, email } = ctx.request.body;
    const user = new User({ username, email, firstname, lastname });
    // await user.save();
    console.log(user);
  });

  router.post("/login", (ctx) => {
    // const { username, password } = ctx.body;
    const { username, password } = ctx.request.body;
  });

  router.all("(.*)", async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
