<template>
  <NavBar class="navfont">
    <div slot="center">购物街</div>
  </NavBar>
</template>

<script>
import NavBar from "components/common/nav-bar/NavBar";
import { getHomeData } from "network/home";
export default {
  data() {
    return {
      banner: [],
      recommend: []
    };
  },
  components: {
    NavBar
  },
  created() {
    getHomeData().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;

      console.log(res);
      console.log(res.data.recommend.list);
    });
  }
};
</script>

<style>
.navfont {
  color: #fff;
  font-size: 24px;
  /* ｆｂ７２９９ */
  /* background-color: var(---color-tint); */
  background-color: #fb7299;
}
</style>
