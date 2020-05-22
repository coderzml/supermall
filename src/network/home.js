import { request } from './request';
export function getHomeData() {
  return request({
    url: "http://123.207.32.32:8000/home/multidata"
  })
}