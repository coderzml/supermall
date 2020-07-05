import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CarInfo: [],
  },
  // mutations 最好都做单一的事情 复杂的事情交给Actions
  mutations: {
    couter(state, payload) {
      payload.count++;
    },
    addToCar(state, payload) {
      state.CarInfo.push(payload)
    }

  },
  actions: {
    // 传值
    addCart(context, payload) {
      // 判断不能添加重复商品(细品)
      let Info = context.state.CarInfo.find(item => payload.id == item.id);
      if (Info) {
        // Info.count += 1;
        context.commit('couter', Info)
      } else {
        context.commit('addToCar', payload)
        // state.CarInfo.push(payload);
        payload.count = 1;
      }
      console.log(context.state.CarInfo);
    }
  },
  modules: {
  }
})
