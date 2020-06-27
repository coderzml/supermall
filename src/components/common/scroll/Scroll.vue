<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // BS 参数
    this.scroll = new BScroll(".wrapper", {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 监听滚动位置
    this.scroll.on("scroll", position => {
      // console.log(position);
      // 发送位置
      this.$emit("scroll", position);
    });
    // 监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    // 点击返回顶部 引用
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 多次上拉加载更多
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    // 计算滑动有效距离
    refresh() {
      console.log("----");
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>
<style scoped>
</style>