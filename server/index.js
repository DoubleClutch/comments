const Koa = require('koa');
const serve = require('koa-static-server');
const Router = require('koa-router');
const Database = require('../database/models/models');

const app = new Koa();
const router = Router();

router.get('/comments/:id', async (ctx) => {
  ctx.body = await Database.findCommentForProduct(ctx.params.id);
});

router.get('/replies/:id', async (ctx) => {
  ctx.body = await Database.findReplyForComment(ctx.params.id);
});

app.use(router.routes()).use(router.allowedMethods());

app.use(serve({ rootDir: './client/dist' }));

app.listen(3004, () => {
  console.log('Server listening on port 3004');
});
