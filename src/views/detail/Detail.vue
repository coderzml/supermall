<template>
  <div>{{id}}</div>
</template>

<script>
export default {
  data() {
    return {
      id: null
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  components: {}
};
</script>
<style scoped>
</style>