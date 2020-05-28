<template>
  <div class="home">
    <!-- 导航 -->
    <NavBar class="navfont">
      <div slot="center">购物街</div>
    </NavBar>
    <!-- 轮播 -->
    <home-swiper :banners="banners"></home-swiper>
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
    <TabControl :titles="['流行','新款','精选']" class="xiding" @tabControlClick="tabControlClick"></TabControl>
    <GoodsList :goods="goods[currentType].list"></GoodsList>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
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

// 网络请求
import { getHomeData, getHomeGoods } from "network/home";
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
      currentType: "pop"
    };
  },
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    Recommend,
    Feature,
    GoodsList
  },
  created() {
    // 请求banner数据
    this.getHomeData();
    // 请求goods数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 组件通信
    tabControlClick(index) {
      let type = ["pop", "new", "sell"];
      this.currentType = type[index];
    },
    // 数据请求
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
      });
    },
    getHomeData() {
      getHomeData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    }
  }
};
</script>

<style>
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
  padding: 44px 0 0 0;
}
/* 给tabcontrol设置吸顶效果 */
.xiding {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
}
</style>
