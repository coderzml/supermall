<template>
  <div class="Toast" v-show="isShow">
    <div class="massage">{{massages}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      massages: "123456789",
      isShow: false
    };
  },
  components: {},
  methods: {
    show(massage = "商品信息", duration = 1500) {
      this.massages = massage;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, duration);
    }
  }
};
</script>
<style scoped>
.Toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  z-index: 999;
}
.massage {
  padding: 10px;
  color: #fff;
}
</style>