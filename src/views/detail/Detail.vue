<template>
  <div id="datail">
    <DetailNav class="Nav"></DetailNav>
    <DetailSwiper :topImages="topImages"></DetailSwiper>
  </div>
</template>

<script>
import DetailNav from "./detailComponents/DtailNav";
// 引入网络请求
import { getDetail } from "../../network/detail";
// 引入轮播
import DetailSwiper from "./detailComponents/DetailSwiper";
export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: null
    };
  },
  created() {
    // 传入ID
    this.id = this.$route.params.id;
    // 获取数据
    getDetail(this.id).then(result => {
      this.topImages = result.result.itemInfo.topImages;
    });
  },
  components: {
    DetailNav,
    DetailSwiper
  }
};
</script>
<style scoped>
.Nav {
  border-bottom: 1px solid #ccc;
}
</style>