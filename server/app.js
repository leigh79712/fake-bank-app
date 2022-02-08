const Koa = require("koa");
const next = require("next");
const Router = require("@koa/router");

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

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

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
