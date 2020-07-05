import { debounce } from "common/utils";
import BackTop from "components/content/backTop/BackTop";
export const ItemMixin = {
  data() {
    return {
      ItemImgLoadData: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 300);
    this.ItemImgLoadData = () => {
      this.refresh();
    };
    this.$bus.$on("ItemImgLoad", this.ItemImgLoadData);
  },
};
// BackTop
export const BackTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0);
    },
    BackTopOffsetTop(position) {
      // 检测回到顶部
      // console.log(position);
      this.isShowBackTop = -position.y > 1000;
    }
  }
}