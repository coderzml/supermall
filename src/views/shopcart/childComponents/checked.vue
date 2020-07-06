<template>
  <div class="check">
    <img src="~assets/img/cart/tick.svg" alt :class="{isChecked:isCheck}" />
  </div>
</template>

<script>
export default {
  props: {
    isCheck: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
.check {
  /* border-radius: 50%;
  width: 20px;
  height: 20px; */
}
.check img {
  border: 2px solid #ccc;
  border-radius: 50%;
}
.check .isChecked {
  border-color: red;
  background-color: red;
}
</style>