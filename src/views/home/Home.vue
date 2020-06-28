<template>
  <div class="home">
    <!-- 导航 -->
    <NavBar class="navfont">
      <div slot="center">购物街</div>
    </NavBar>
    <TabControl
      :titles="['流行','新款','精选']"
      class="xiding"
      @tabControlClick="tabControlClick"
      ref="tabControl2"
      :class="{fixed:isFixed}"
      v-show="isFixed"
    ></TabControl>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播 -->
      <home-swiper :banners="banners" @SwiperImgLoad="SwiperLoad"></home-swiper>
      <!-- 导航2 -->
      <Recommend :recommends="recommends"></Recommend>
      <!-- content -->
      <Feature></Feature>
      <!-- tabcontrol -->
      <!-- <TabControl>
      <div slot="left">
        <span>流行</span>
      </div>
      <div slot="center">
        <span>新品</span>
      </div>
      <div slot="right">
        <span>精选</span>
      </div>
      </TabControl>-->
      <TabControl
        :titles="['流行','新款','精选']"
        class="xiding"
        @tabControlClick="tabControlClick"
        ref="tabControl1"
      ></TabControl>
      <GoodsList :goods="goods[currentType].list"></GoodsList>
    </scroll>
    <BackTop @click.native="backTop" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
// 独立组件
import NavBar from "components/common/nav-bar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
// 子组件
import HomeSwiper from "./childComponnets/HomeSwiper";
import Recommend from "./childComponnets/Recommend";
import Feature from "./childComponnets/Feature";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";
// 网络请求
import { getHomeData, getHomeGoods } from "network/home";
// scroll
import scroll from "components/common/scroll/Scroll";
// 工具
import { debounce } from "common/utils";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      TabControl: 0,
      isFixed: false,
      scrollTop: 0
    };
  },
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    Recommend,
    Feature,
    GoodsList,
    scroll,
    BackTop
  },
  created() {
    // 请求banner数据
    this.getHomeData();
    // 请求goods数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 监听图片加载完毕
    let refresh = debounce(this.$refs.scroll.refresh, 300);
    this.$bus.$on("ItemImgLoad", () => {
      // 每当接受请求 调用重新计算scroll高度
      // this.$refs.scroll && this.$refs.scroll.refresh();
      refresh();
    });
    // 事件总线的方式
    // this.$bus.$on("SwiperImgLoad", () => {
    //   console.log(123);
    //   console.log(this.$refs.tabControl.$el.offsetTop);
    // });
  },
  // 路由处于活跃时 滑动到位置
  activated() {
    // console.log(this.scrollTop);
    // this.$refs.scroll.scrollTo(0, this.scrollTop, 0);
  },
  // 路由处于不活跃时 记录当时的位置
  deactivated() {
    this.scrollTop = this.$refs.scroll.scroll.y;
  },
  // upload() {
  //   console.log(456);
  // },
  methods: {
    // 组件通信
    tabControlClick(index) {
      let type = ["pop", "new", "sell"];
      this.currentType = type[index];
      // 修改tabcontrol的current
      this.$refs.tabControl1.indexCurrent = index;
      this.$refs.tabControl2.indexCurrent = index;
    },
    // 数据请求
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        // 上拉完之后加载更多
        this.goods[type].page += 1;
        // 可以上拉多次
        this.$refs.scroll && this.$refs.scroll.finishPullUp();
      });
    },
    getHomeData() {
      getHomeData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    backTop() {
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0);
    },
    // 检测scroll位置
    contentScroll(position) {
      // 检测回到顶部
      // console.log(position);
      this.isShowBackTop = -position.y > 1000;
      // 检测tabcontrol
      this.isFixed = -position.y > this.TabControl;
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    // 轮播图片加载完毕
    SwiperLoad() {
      // 获取tabcontrol距离顶部
      this.TabControl = this.$refs.tabControl1.$el.offsetTop;
    }
  }
};
</script>

<style scoped>
.navfont {
  width: 100%;
  position: fixed;
  top: 0;
  color: #fff;
  font-size: 24px;
  /* ｆｂ７２９９ */
  /* background-color: var(---color-tint); */
  background-color: #fb7299;
  z-index: 9;
}
.home {
  /* padding: 44px 0 0 0; */
  height: 100vh;
}
/* 给tabcontrol设置吸顶效果 */
.xiding {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
}
.content {
  /* height: calc(100% - 93px); */
  position: absolute;
  top: 43px;
  bottom: 49px;
  overflow: hidden;
  /* margin-top: 44px; */
}
.fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}
</style>
