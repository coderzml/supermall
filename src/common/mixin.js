import { debounce } from "common/utils";
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
}