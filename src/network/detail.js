import { request } from './request';
export function getDetail(iid) {
  return request({
    url: "http://152.136.185.210:8000/api/n3/detail",
    params: {
      iid
    }
  })
}