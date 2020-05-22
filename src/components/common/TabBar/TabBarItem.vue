<template>
    <div class="TabBarItem" @click="TabBarItemClick"> 
      <div v-if="!isActive"><slot name="img"></slot></div>
      <div v-else><slot name="img2"></slot></div>      
      <!-- <div :class="{isColor:isActive}"><slot name="text"></slot></div>       -->
      <div :style="isColor"><slot name="text"></slot></div>            
    </div>
</template>

<script>
export default {
  props: {
    path: String,
    BarColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isActive: false
    };
  },
  methods: {
    TabBarItemClick() {
      this.$router.replace(this.path).catch(ero => ero);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isColor() {
      // 先判断是否热路由 再操作
      return this.isActive ? { color: this.BarColor } : {};
    }
  }
};
</script>

<style>
.TabBarItem {
  flex: 1;
  text-align: center;
}
.TabBarItem img {
  width: 20px;
  vertical-align: middle;
  margin-top: 3px;
}
/* .isColor {
  color: red;
} */
</style>
