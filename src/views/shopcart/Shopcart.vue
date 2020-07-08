<template>
  <div id="cart">
    <!-- 导航 -->
    <NavBar class="car">
      <div slot="center">购物车({{CarListLength}})</div>
    </NavBar>
    <!-- 商品展示区域 -->
    <Scroll class="scroll">
      <CarList></CarList>
    </Scroll>
    <!-- 汇总区域 -->
    <CartBottomBar @goPrice="goPrice"></CartBottomBar>
  </div>
</template>

<script>
import NavBar from "components/common/nav-bar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import CarList from "./childComponents/CarList";
import CartBottomBar from "./childComponents/CartBottomBar";
// 引入getters转计算属性的功能
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
    Scroll,
    CarList,
    CartBottomBar
  },
  computed: {
    // 普通用法
    // CarListLength() {
    //   // return this.$store.state.CarInfoList.length;
    //   return this.$store.getters.CarList;
    // },
    // 高级用法 数组用法
    ...mapGetters(["CarListLength", "CartList"])
    // 对象用法
    // ...mapGetters({
    //   name: "CarListLength"
    // })
  },
  methods: {
    goPrice() {}
  }
};
</script>

<style scoped>
.car {
  background-color: hotpink;
  color: #fff;
}

.scroll {
  position: absolute;
  top: 44px;
  bottom: 99px;
  overflow: hidden;
}
</style>
