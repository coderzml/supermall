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
  </div>
</template>

<script>
// 组件
import NavBar from "components/common/nav-bar/NavBar";
import HomeSwiper from "./childComponnets/HomeSwiper";
import Recommend from "./childComponnets/Recommend";
import Feature from "./childComponnets/Feature";

// 网络请求
import { getHomeData } from "network/home";
export default {
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Feature
  },
  created() {
    getHomeData().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;

      console.log(res);
      console.log(res.data.banner.list);
    });
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
  padding: 44px 0 500px 0;
}
</style>
