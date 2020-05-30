import Router from 'koa-router';
import axios from 'axios';
import { getTrackingInfo } from '../../lib/sweettracker';

const api = new Router();

api.get('/check', async ctx => {
  ctx.body = {
    version: 'v.0.0.1'
  };
});

api.post('/trackingInfo', async ctx => {
  type RequestBody = {
    t_code: string;
    t_invoice: string;
  };
  const { t_code, t_invoice }: RequestBody = ctx.request.body;
  /**
   * t_key *string 발급받은 키
   * t_code *string	택배사 코드
   * t_invoice *string 운송장 번호
   */
  try {
    const data = await getTrackingInfo(t_code, t_invoice);
    ctx.body = {
      data
    };
  } catch (e) {
    ctx.body = {
      name: 'INVALID_APICODE'
    };
    return;
  }
});
export default api;
