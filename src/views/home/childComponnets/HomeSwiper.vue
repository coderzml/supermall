<template>
  <Swiper>
    <SwiperItem v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="SwiperImgLoad" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    // 发送图片加载完事件
    SwiperImgLoad() {
      if (!this.isLoad) {
        // this.$bus.$emit("SwiperImgLoad");
        this.$emit("SwiperImgLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>
<style>
</style>