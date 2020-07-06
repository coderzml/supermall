<template>
  <div>
    <Swiper class="heightHide">
      <SwiperItem v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      defaule() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style scoped>
.heightHide {
  height: 300px;
}
</style>