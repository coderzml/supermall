<template>
  <div id="datail">
    <DetailNav class="Nav"></DetailNav>
    <Scroll class="centant" ref="scroll">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :Goods="Goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :DetailGoods="DetailGoods" @imgLoad="_imgLoad"></DetailGoodsInfo>
      <DetailParamInfo :DetailParam="DetailParam"></DetailParamInfo>
      <DetailCommentInfo :DetailComment="DetailComment"></DetailCommentInfo>
      <GoodsList :goods="DetailRecommended"></GoodsList>
    </Scroll>
  </div>
</template>

<script>
import DetailNav from "./detailComponents/DtailNav";
// 引入网络请求
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getDetailRecommended
} from "../../network/detail";
// 引入轮播
import DetailSwiper from "./detailComponents/DetailSwiper";
// 引入Info
import DetailBaseInfo from "./detailComponents/DetailBaseInfo";
import DetailShopInfo from "./detailComponents/DetailShopInfo";
import DetailGoodsInfo from "./detailComponents/DetailGoodsInfo";
import DetailParamInfo from "./detailComponents/DetailParamInfo";
import DetailCommentInfo from "./detailComponents/DetailCommentInfo";
// 推荐模块 引入了Goods模块
import GoodsList from "components/content/goods/GoodsList";
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
      DetailParam: {},
      DetailComment: {},
      DetailRecommended: []
    };
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList
  },
  created() {
    // 传入ID
    this.id = this.$route.params.id;
    // 获取详情数据
    getDetail(this.id).then(result => {
      let data = result.result;
      // 轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 产品数据
      this.Goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
      // 店铺数据
      this.shop = new Shop(data.shopInfo);
      // 产品详情数据
      this.DetailGoods = data.detailInfo;
      // 产品参数数据
      this.DetailParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 参数评价数据
      this.DetailComment = data.rate.list[0];
    });
    // 请求推荐数据
    getDetailRecommended().then(res => {
      this.DetailRecommended = res.data.list;
    });
  },
  mounted() {
    console.log(123);

    this.$bus.$on("ItemImgLoadDetail", () => {
      console.log("详情页监听");
    });
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