import { request } from './request';
export function getDetail(iid) {
  return request({
    url: "http://152.136.185.210:8000/api/n3/detail",
    params: {
      iid
    }
  })
}
export function getDetailRecommended() {
  return request({
    url: "http://152.136.185.210:8000/api/n3/recommend",
  })
}
// 整合数据 
export class Goods {
  constructor(itemInfo, columns, shopInfo) {
    // 店铺
    this.name = shopInfo.name;
    // 标题
    this.title = itemInfo.title;
    // 标题？
    this.desc = itemInfo.desc;
    // 价格
    this.newPrice = itemInfo.price
    // 旧价格
    this.oldPrice = itemInfo.oldPrice
    // 副标题
    this.discount = itemInfo.discountDesc
    // 标签数组
    this.columns = columns
    // 不确定
    this.services = shopInfo.services
    // 确定价格
    this.realPrice = itemInfo.lowNowPrice
  }
}

// shopInfo商店数据
export class Shop {
  constructor(shopInfo) {
    // logo
    this.logo = shopInfo.shopLogo;
    // 店铺name
    this.name = shopInfo.name;

    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    // 描述
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
// Param
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}