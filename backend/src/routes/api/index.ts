import Router from 'koa-router';

const api = new Router();

api.get('/check', async ctx => {
  ctx.body = {
    version: 'v.0.0.1'
  };
});
export default api;
