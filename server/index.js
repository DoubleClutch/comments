const Koa = require('koa');
const serve = require('koa-static-server');

const app = new Koa();

app.use(serve({ rootDir: './client/dist' }));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
