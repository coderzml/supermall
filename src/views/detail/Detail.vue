<template>
  <div id="datail">
    <DetailNav class="Nav" @DetailNavClick="DetailNavClick" ref="Nav"></DetailNav>
    <Scroll class="centant" ref="scroll" @scroll="scrollPosition" :probeType="3">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :Goods="Goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :DetailGoods="DetailGoods" @imgLoad="_imgLoad"></DetailGoodsInfo>
      <DetailParamInfo ref="params" :DetailParam="DetailParam"></DetailParamInfo>
      <DetailCommentInfo ref="comment" :DetailComment="DetailComment"></DetailCommentInfo>
      <GoodsList ref="recommend" :goods="DetailRecommended"></GoodsList>
    </Scroll>
    <DetailBottomBar @addCar="addCart"></DetailBottomBar>
    <BackTop @click.native="backTop" v-show="isShowBackTop"></BackTop>
    <!-- <Toast :massage="massage" :isShow="isShow"></Toast> -->
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
import DetailBottomBar from "./detailComponents/DetailBottomBar";
// 推荐模块 引入了Goods模块
import GoodsList from "components/content/goods/GoodsList";
// 引入滚动
import Scroll from "components/common/scroll/Scroll";
//引入防抖
import { debounce } from "common/utils";
import { ItemMixin, BackTopMixin } from "common/mixin";
// toast
import Toast from "components/common/toast/Toast";
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
      DetailRecommended: [],
      tempTopY: [],
      offsetTopDebounce: null,
      curentIndex: 0,
      massage: "",
      isShow: false
    };
  },
  mixins: [ItemMixin, BackTopMixin],
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Toast
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
      // 这样写数据容易不准确
      // this.$nextTick(() => {
      //   this.tempTopY = [];
      //   this.tempTopY.push(44);
      //   this.tempTopY.push(this.$refs.params.$el.offsetTop);
      //   this.tempTopY.push(this.$refs.comment.$el.offsetTop);
      //   this.tempTopY.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.tempTopY);
      // });
    });
    // 请求推荐数据
    getDetailRecommended().then(res => {
      this.DetailRecommended = res.data.list;
    });
    // 获取offsetTop
    this.offsetTopDebounce = debounce(() => {
      this.tempTopY = [];
      this.tempTopY.push(44);
      this.tempTopY.push(this.$refs.params.$el.offsetTop);
      this.tempTopY.push(this.$refs.comment.$el.offsetTop);
      this.tempTopY.push(this.$refs.recommend.$el.offsetTop);
      this.tempTopY.push(Number.MAX_VALUE);
    }, 300);
  },
  mounted() {
    // 这里用混入了 mixin
    // let refresh = debounce(this.$refs.scroll.refresh, 300);
    // this.ItemImgLoadData = () => {
    //   refresh();
    // };
    // this.$bus.$on("ItemImgLoad", this.ItemImgLoadData);
    this.$bus.$on("refresh", () => {
      // 这里没用
      // this.$refs.scroll.refresh();
      // console.log(123456789);
    });
  },
  // 以为Detail被列为了 不重构对象 所以 路由的不活跃函数检测不到
  deactivated() {
    console.log("路由不活跃");
  },
  // 销毁函数
  destroyed() {
    this.$bus.$off("ItemImgLoad", this.ItemImgLoadData);
  },
  methods: {
    _imgLoad() {
      // 第一种方案
      // this.$refs.scroll.refresh();
      // 第二种方案(有点难以理解 需要看mixin的代码)
      // 这里可以直接调用refresh的原因是 refresh本身包含 imgload刷新功能
      this.refresh();
      // 这个地方解决了 offsetTop不准确的问题
      this.offsetTopDebounce();
    },
    DetailNavClick(index) {
      if (index <= 2) {
        this.$refs.scroll.scrollTo(0, -this.tempTopY[index] + 40, 300);
      } else {
        this.$refs.scroll.scrollTo(0, -this.tempTopY[index] + 40, 300);
      }
    },
    // 判断滑动位置
    scrollPosition(position) {
      this.BackTopOffsetTop(position);
      let positionY = -position.y + 44;
      // console.log(positionY);
      // [44, 5518, 6261, 6509]
      // 第一种方法
      // if (positionY < this.tempTopY[1]) {
      //   this.$refs.Nav.currentIndex = 0;
      // } else if (positionY > this.tempTopY[1] && positionY < this.tempTopY[2]) {
      //   this.$refs.Nav.currentIndex = 1;
      // } else if (positionY > this.tempTopY[2] && positionY < this.tempTopY[3]) {
      //   this.$refs.Nav.currentIndex = 2;
      // } else if (positionY > this.tempTopY[3]) {
      //   this.$refs.Nav.currentIndex = 3;
      // }
      // 第二种方法
      for (let i = 0; i < this.tempTopY.length; i++) {
        if (
          // this.curentIndex !== i &&
          positionY >= this.tempTopY[i] &&
          positionY <= this.tempTopY[i + 1]
        ) {
          // this.curentIndex = i;
          this.$refs.Nav.currentIndex = i;
        }
      }
    },
    addCart() {
      const CarInfo = {};
      CarInfo.id = this.id;
      CarInfo.image = this.topImages[0];
      CarInfo.title = this.Goods.title;
      CarInfo.desc = this.Goods.desc;
      CarInfo.price = this.Goods.realPrice;
      // this.$store.dispatch("addCart", CarInfo);
      // 找不到Promise
      this.$store.dispatch("addCart", CarInfo).then(res => {
        console.log(res);
        // this.massage = res;
        // this.isShow = true;
        // setTimeout(() => {
        //   this.isShow = false;
        // }, 1500);
        // 封装的插件
        this.$toast.show(res, 1500);
        console.log(this.$toast);
      });
      // console.log("商品加入购物车成功");
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
  height: calc(100% - 44px - 58px);
}
</style>