<template>
  <div id="datail">
    <DetailNav class="Nav"></DetailNav>
    <Scroll class="centant" ref="scroll">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :Goods="Goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :DetailGoods="DetailGoods" @imgLoad="_imgLoad"></DetailGoodsInfo>
      <DetailParamInfo :DetailParam="DetailParam"></DetailParamInfo>
    </Scroll>
  </div>
</template>

<script>
import DetailNav from "./detailComponents/DtailNav";
// 引入网络请求
import { getDetail, Goods, Shop, GoodsParam } from "../../network/detail";
// 引入轮播
import DetailSwiper from "./detailComponents/DetailSwiper";
// 引入Info
import DetailBaseInfo from "./detailComponents/DetailBaseInfo";
import DetailShopInfo from "./detailComponents/DetailShopInfo";
import DetailGoodsInfo from "./detailComponents/DetailGoodsInfo";
import DetailParamInfo from "./detailComponents/DetailParamInfo";
// 引入滚动
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: null,
      Goods: {},
      shop: {},
      DetailGoods: {},
      DetailParam: {}
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
      this.DetailGoods = data.detailInfo;
      console.log(data);
      this.DetailParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      console.log(this.DetailParam);
    });
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo
  },
  methods: {
    _imgLoad() {
      this.$refs.scroll.refresh();
    }
  }
};
</script>
<style scoped>
.Nav {
  border-bottom: 1px solid #ccc;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
#datail {
  position: relative;
  z-index: 99;
  background-color: #fff;
  height: 100vh;
}
.centant {
  height: calc(100% - 44px);
}
</style>