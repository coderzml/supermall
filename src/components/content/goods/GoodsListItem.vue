<template>
  <div v-if="Object.keys(goodsItem).length != 0" class="goods-item" @click="detail">
    <a>
      <img :src="showImg" alt @load="ItemImgLoad" />
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span>{{goodsItem.price}}</span>
        <span>{{goodsItem.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  methods: {
    // 发送事件
    ItemImgLoad() {
      // if (this.$route.path.indexOf("/detail")) {
      //   this.$bus.$emit("ItemImgLoadDetail");
      // } else if (this.$route.path.indexOf("/home")) {
      //   this.$bus.$emit("ItemImgLoad");
      // }
      this.$bus.$emit("ItemImgLoad");
    },
    detail() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  }
};
</script>
<style>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>