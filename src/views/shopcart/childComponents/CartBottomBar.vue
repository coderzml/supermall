<template>
  <div class="CartBottomBar">
    <div class="left">
      <Checked class="check" @click.native="clickAll" :isCheck="isActive"></Checked>
      <span>全选</span>
    </div>
    <div class="center">合计：￥{{sumPrice}}</div>
    <div class="right" @click="goPrice">去结算({{sumCount}})</div>
  </div>
</template>

<script>
import Checked from "./checked";
export default {
  data() {
    return {
      // isActive: this.$store.state.isAll
    };
  },
  components: { Checked },
  computed: {
    sumPrice() {
      return this.$store.state.CarInfoList.filter(item => {
        return item.isChecked;
      }).reduce((preValue, item) => {
        return (preValue += item.price * item.count);
      }, 0);
    },
    sumCount() {
      return this.$store.state.CarInfoList.filter(item => {
        return item.isChecked;
      }).length;
    },
    isActive() {
      return this.$store.state.isAll;
    }
  },

  methods: {
    clickAll() {
      // this.isActive = this.$store.state.isAll;
      // console.log(this.$store.state.CarInfoList);
      // console.log(!this.$store.state.isAll);
      // 点击全选按钮的时候先给自己的值取消掉（取反）
      // this.isActive = !this.$store.state.isAll;
      // 让所有的列表item都不显示 （取反）
      this.$store.state.CarInfoList.forEach(el => {
        el.isChecked = !this.$store.state.isAll;
        // el.isChecked = true;
      });
      // 改变总的isAll（vuex的）
      this.$store.state.isAll = !this.isActive;
      // this.isActive = this.$store.state.isAll;
    },
    goPrice() {
      if (this.sumCount !== 0) {
        this.$toast.show("正在结算");
      } else {
        this.$toast.show("请选择商品");
      }
    }
  }
};
</script>
<style scoped>
.CartBottomBar {
  height: 50px;
  width: 100%;
  background-color: #999;
  position: absolute;
  bottom: 50px;
  display: flex;
  line-height: 50px;
}
.left {
  width: 90px;
  display: flex;
  align-items: center;
}
.check {
  margin: 6px 0 0 5px;
}
.left span {
  margin-left: 10px;
  color: #fff;
}
.center {
  color: #fff;
  flex: 1;
}
.right {
  width: 100px;
  color: #fff;
  text-align: center;
  background-color: hotpink;
}
</style>