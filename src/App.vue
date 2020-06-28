<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <mainTabBar></mainTabBar>
  </div>
</template>
<script>
import mainTabBar from "components/content/mainTabBar";
export default {
  components: {
    mainTabBar
  }
};
</script>
<style lang="scss">
@import url("assets/css/base.css");
</style>
