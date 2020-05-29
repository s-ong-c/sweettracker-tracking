import Router from 'koa-router';
import api from './api';

const routes = new Router();

/** Test */
routes.get('/', ctx => {
  ctx.body = 'hello world!!!!';
});

/**info.sweettracker.co.kr/api/v1/trackingInfo? */
/** Api */
routes.use('/api', api.routes());

export default routes;
