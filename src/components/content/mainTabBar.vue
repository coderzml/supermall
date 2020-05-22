<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" BarColor="deepPink">
        <img slot="img" src="~assets/img/tabbar/home.svg" alt />
        <img slot="img2" src="~assets/img/tabbar/home_active.svg" alt />
        <div slot="text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" BarColor="deepPink">
        <img slot="img" src="~assets/img/tabbar/category.svg" alt />
        <img slot="img2" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="text">分类</div>
      </TabBarItem>
      <TabBarItem path="/shopcart" BarColor="deepPink">
        <img slot="img" src="~/assets/img/tabbar/shopcart.svg" alt />
        <img slot="img2" src="~assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" BarColor="deepPink">
        <img slot="img" src="~assets/img/tabbar/profile.svg" alt />
        <img slot="img2" src="~assets/img/tabbar/profile_active.svg" alt />
        <div slot="text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>
<script>
import TabBar from "components/common/TabBar/TabBar";
import TabBarItem from "components/common/TabBar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>
