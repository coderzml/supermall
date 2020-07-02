<template>
  <div class="recommends">
    <div v-for="(item,index) in recommends" :key="index" class="recommendsItem">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: Array
  },
  conponents: {}
};
</script>
<style scoped>
.recommends {
  display: flex;
  padding: 15px 0 25px 0;
  border-bottom: 8px solid #eee;
}
.recommendsItem {
  flex: 1;
  text-align: center;
}
.recommendsItem img {
  width: 90%;
}
</style>