<template>
  <div id="shopInfo">
    <div class="logo">
      <img :src="shop.logo" alt class="logo_img" />
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="InfoContent">
      <div class="left">
        <div class="left-top">
          <span class="wan">{{wan}}</span>
          <span class="AllBaby">{{shop.goodsCount}}</span>
        </div>
        <br />
        <div class="left-bottom">
          <span class="Allnum">总销量</span>
          <span class="AllBabyFont">全部宝贝</span>
        </div>
      </div>
      <div class="right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index" class="right-font">
            <td>{{item.name}}</td>
            <td :class="{active2:item.isBetter}" class="active1">{{item.score}}</td>
            <td :class="{activeBG2:item.isBetter}" class="activeBG1">{{item.isBetter ? '高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="jdgg">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  components: {},
  computed: {
    wan() {
      return (this.shop.sells / 10000).toFixed(1) + "万";
    }
  }
};
</script>
<style scoped>
#shopInfo {
  height: 1000px;
  padding: 0 10px;
}
.logo {
  margin-top: 20px;
  height: 55px;
}
.logo_img {
  width: 50px;
}
.title {
  display: inline-block;
  vertical-align: middle;
  height: 55px;
  line-height: 55px;
  margin-left: 10px;
  position: relative;
  top: -20px;
}
.InfoContent {
  height: 100px;
}
.InfoContent .left {
  height: 60px;
  width: 50%;
  border-right: 2px solid #ccc;
  margin-top: 22px;
}
.wan {
  font-size: 24px;
}
.AllBaby {
  font-size: 24px;
  margin-left: 10px;
}
.left-bottom .AllBabyFont {
  margin-left: 25px;
}
.right {
  width: 50%;
  padding: 20px 0 0 12px;
}
.right td {
  text-align: center;
  padding: 2px 2px;
}
.active1 {
  color: green;
}
.active2 {
  color: red;
}
.activeBG1 {
  color: aliceblue;
  background-color: green;
}
.activeBG2 {
  color: aliceblue;
  background-color: red;
}
.jdgg {
  margin-top: 20px;
  text-align: center;
}
.jdgg div {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>