<template>
  <div v-if="Object.keys(DetailGoods).length !== 0 " id="DetailGoods">
    <div class="padding">
      <div class="header">
        <div class="top-line"></div>
        <div class="font">{{DetailGoods.desc}}</div>
        <div class="bottom-line"></div>
      </div>
      <div class="xiaogou">{{DetailGoods.detailImage[0].key}}</div>
    </div>
    <div class="img-info" v-for="(item,index) in DetailGoods.detailImage[0].list" :key="index">
      <img :src="item" alt class="img-item" @load="imgItemLoad" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    DetailGoods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {
    console.log(this.DetailGoods);
  },
  data() {
    return {
      imgLength: 0,
      num: 0
    };
  },
  components: {},
  methods: {
    imgItemLoad() {
      // this.num++;
      if (++this.num === this.imgLength) {
        this.$emit("imgLoad");
      }
    }
  },
  // 监视（这样写的好处的 不用频繁对比）
  watch: {
    DetailGoods() {
      this.imgLength = this.DetailGoods.detailImage[0].list.length;
    }
  }
};
</script>
<style scoped>
#DetailGoods {
  margin-top: 20px;
  border-top: 3px solid #f5f5f5;
  padding-top: 20px;
}
.padding {
  padding: 0 10px;
}
.header {
  position: relative;
  padding: 20px 0px;
}
.top-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 2px;
  background-color: #ccc;
}
.bottom-line {
  position: absolute;
  bottom: 0px;
  right: 0;
  width: 100px;
  height: 2px;
  background-color: #ccc;
}
.top-line::after,
.bottom-line::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 10px;
  height: 10px;
  background-color: #666;
}
.bottom-line::before {
  right: 0;
}
.font {
}
.xiaogou {
  margin: 10px 0 10px 0;
  color: #333;
  font-size: 18px;
}
.img-item {
  width: 100%;
  height: 100%;
}
</style>