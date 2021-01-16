import { instances } from './request'
export function getHomeMultidata() {
  return instances({
    url:'/home/multidata'
  })
}
export function getHomeGoods(type, page) {
  return instances({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}