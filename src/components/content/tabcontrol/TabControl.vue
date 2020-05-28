<template>
  <div class="tabControl">
    <!-- <div class="tabControlItem">
      <slot name="left"></slot>
    </div>
    <div class="tabControlItem">
      <slot name="center"></slot>
    </div>
    <div class="tabControlItem">
      <slot name="right"></slot>
    </div>-->
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tabControlItem"
      :class="{active:index===indexCurrent}"
      @click="current(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexCurrent: 0
    };
  },
  props: {
    titles: Array
  },
  conponents: {},
  methods: {
    // 点击变红
    current(index) {
      this.indexCurrent = index;
      // 把下标传出去用于判断显示那组数据
      this.$emit("tabControlClick", index);
    }
  }
};
</script>
<style>
.tabControl {
  display: flex;
}
.tabControlItem {
  flex: 1;
  height: 50px;
  text-align: center;
  line-height: 50px;
  /* background-color: pink; */
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 1px solid var(--color-tint);
  padding: 3px;
  font-size: 16px;
}
</style>