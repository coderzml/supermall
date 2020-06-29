<template>
  <div id="Info" v-if="Object.keys(Goods.length !== 0)">
    <div class="title">
      [ {{Goods.name}} ]
      <span>{{Goods.title}}</span>
    </div>

    <div class="price">
      <span class="newPrice">{{Goods.newPrice}}</span>
      <span class="oldPrice">
        <del>{{Goods.oldPrice}}</del>
      </span>
      <span v-if="Goods.discount" class="discount">{{Goods.discount}}</span>
    </div>
    <div class="BaseInfo">
      <!-- <span v-for="(item,index) in Goods.columns.length" :key="index">{{Goods.columns[item-1]}}</span> -->
      <span>{{Goods.columns[0]}}</span>
      <span>{{Goods.columns[1]}}</span>
      <span>{{Goods.services[Goods.services.length -1].name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Goods: Object
  },
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
#Info {
  padding: 0 5px;
}
.title {
  /* height: 100px; */
  line-height: 20px;
  margin: 10px 0 10px 0;
  text-indent: 1rem;
  /* font-size: 20px; */
  font-weight: 550;
}
.newPrice {
  font-size: 28px;
  color: red;
  margin-right: 10px;
}
.BaseInfo {
  display: flex;
  margin-top: 20px;
  height: 30px;
  border-bottom: 1px solid #ccc;
}
.BaseInfo span {
  text-align: left;
  flex: 1;
}
.BaseInfo span:nth-child(2) {
  text-align: center;
}
.BaseInfo span:nth-child(3) {
  text-align: right;
}
.discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 10px;
  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}
</style>