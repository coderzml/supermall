<template>
  <div class="CarList">
    <CartListItem v-for="(item,index) in CartList" :key="index" :ItemInfo="item"></CartListItem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem";
export default {
  computed: {
    ...mapGetters(["CartList"])
  },
  components: {
    CartListItem
  }
};
</script>
<style scoped>
.CarList {
  width: 100%;
}
</style>