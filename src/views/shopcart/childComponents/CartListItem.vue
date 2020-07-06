<template>
  <div class="CartItem">
    <div class="left">
      <div class="check">
        <checked :isCheck="ItemInfo.isChecked" @click.native="clickCheck"></checked>
      </div>
    </div>
    <div class="center">
      <img :src="ItemInfo.image" alt />
    </div>
    <div class="right">
      <p class="title">{{ItemInfo.title}}</p>
      <p class="desc">{{ItemInfo.desc}}</p>
      <div>
        <span class="price">￥{{ItemInfo.price}}</span>
        <span class="count">x{{ItemInfo.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import checked from "./checked";
export default {
  props: {
    ItemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isAll: null
    };
  },
  components: {
    checked
  },
  computed: {
    sumCount() {
      return this.$store.state.CarInfoList.filter(item => {
        return item.isChecked;
      }).length;
    }
  },
  methods: {
    clickCheck() {
      // 去反
      this.ItemInfo.isChecked = !this.ItemInfo.isChecked;
      // 判断length
      this.isAll = this.sumCount == this.$store.state.CarInfoList.length;
      this.$store.state.isAll = this.isAll;
      console.log(this.$store.state.isAll);
      // this.$bus.$emit("clickAll");
    }
  }
};
</script>
<style scoped>
.CartItem {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.left {
  width: 25px;
  padding-left: 2px;
}
.check {
  position: relative;
  top: 20px;
}
.center {
}
.center img {
  height: 90px;
  width: 70px;
  border-radius: 5px;
  padding-top: 5px;
}
.right {
  width: 220px;
  padding: 10px;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
}
.desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 7px 0;
}
.price {
  font-size: 20px;
  color: red;
  float: left;
}
.count {
  /* position: relative;
  right: 20px; */
  float: right;
}
</style>