import axios from 'axios';
import { Context } from 'koa';

const API_KEY = 'ngPfW9E0SzZ3lf5DW2RbtQ';

const apiClient = axios.create({
  baseURL: 'http://info.sweettracker.co.kr/api/v1'
});

/**
 * t_key *string 발급받은 키
 * t_code *string	택배사 코드
 * t_invoice *string 운송장 번호
 */

// 택배조회
export const getTrackingInfo = async (t_code: string, t_invoice: string) => {
  return apiClient
    .get(`trackingInfo?t_key=${API_KEY}&t_code=${t_code}&t_invoice=${t_invoice}`, {
      timeout: 15000
    })
    .then(response => response.data);
};

// 조회 할수 있는 택배사
export const getCompanylist = async () => {
  return apiClient
    .get(`companylist?t_key=${API_KEY}`, {
      timeout: 15000
    })
    .then(response => response.data);
};

// 운장송 번호 -> 추천 택배사
export const getRecommend = async (t_invoice: string) => {
  return apiClient
    .get(`recommend?t_key=${API_KEY}&t_invoice=${t_invoice}`, {
      timeout: 15000
    })
    .then(response => response.data);
};
