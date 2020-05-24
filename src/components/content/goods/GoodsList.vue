<template>
  <div class="GoodsList">
    <GoodsListItem v-for="(item,index) in goods" :key="index" :goodsItem="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goods: Array
  },
  components: { GoodsListItem }
};
</script>
<style>
.GoodsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>