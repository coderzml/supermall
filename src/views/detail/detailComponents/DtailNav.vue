<template>
  <Nav>
    <div slot="left" @click="back">
      <img src="~assets/img/common/back.svg" alt class="back" />
    </div>
    <div slot="center" class="nav">
      <div
        v-for="(item,index) in titles"
        :key="index"
        class="navItem"
        :class="{active:index === currentIndex}"
        @click="itemClick(index)"
      >{{item}}</div>
    </div>
  </Nav>
</template>

<script>
import Nav from "components/common/nav-bar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评价", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    Nav
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("DetailNavClick", index);
    },
    back() {
      this.$router.back();
      this.$bus.$emit("refresh");
    }
  }
};
</script>
<style scoped>
.nav {
  display: flex;
}
.navItem {
  flex: 1;
}
.active {
  color: red;
}
.back {
  margin-top: 11px;
}
</style>