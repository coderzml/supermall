<template>
  <div v-if="Object.keys(DetailParam).length !== 0" id="paramInfo">
    <div class="padding">
      <div class="param1">
        <table>
          <tr v-for="(item,index) in DetailParam.sizes[0]" :key="index" class="borderBottom">
            <td v-for="(item2,index) in item" :key="index" class="param-item">{{item2}}</td>
          </tr>
        </table>
      </div>
      <div class="param2">
        <table>
          <tr v-for="(item,index) in DetailParam.infos" :key="index" class="borderBottom">
            <!-- <td v-for="(item2,index) in item" :key="index" class="param-item colorItem">{{item2}}</td> -->
            <td class="param2Item1">{{item.key}}</td>
            <td class="param2Item2">{{item.value}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    DetailParam: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
#paramInfo {
  background-color: #fff;
  border-top: 3px solid #f5f5f5;
}
.padding {
  padding: 0 10px;
}
.param1 table {
  width: 100%;
}
.borderBottom {
  border-bottom: 1px solid #ccc;
  width: 100%;
  /* height: 40px; */
  padding: 10px 0;
  display: flex;
  /* line-height: 40px; */
}
.param-item {
  flex: 1;
}
.param2Item1 {
  flex: 1;
}
.param2Item2 {
  flex: 1;
  color: red;
}
</style>