<template>
  <div id="datail">
    <DetailNav class="Nav"></DetailNav>
    <DetailSwiper :topImages="topImages"></DetailSwiper>
    <DetailBaseInfo :Goods="Goods"></DetailBaseInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
  </div>
</template>

<script>
import DetailNav from "./detailComponents/DtailNav";
// 引入网络请求
import { getDetail, Goods, Shop } from "../../network/detail";
// 引入轮播
import DetailSwiper from "./detailComponents/DetailSwiper";
// 引入Info
import DetailBaseInfo from "./detailComponents/DetailBaseInfo";
import DetailShopInfo from "./detailComponents/DetailShopInfo";
export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: null,
      Goods: {},
      shop: {}
    };
  },
  created() {
    // 传入ID
    this.id = this.$route.params.id;
    // 获取数据
    getDetail(this.id).then(result => {
      let data = result.result;
      this.topImages = data.itemInfo.topImages;
      this.Goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
      this.shop = new Shop(data.shopInfo);
      console.log(this.shop);
    });
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  }
};
</script>
<style scoped>
.Nav {
  border-bottom: 1px solid #ccc;
}
</style>