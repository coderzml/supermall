import Vue from 'vue'
import Vuex from 'vuex'
// 自动生成这玩意哦 沃日哦
// import { resolve, reject } from 'core-js/fn/promise';
// import { reject } from 'core-js/fn/promise';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CarInfoList: [],
    isAll: false
  },
  // mutations 最好都做单一的事情 复杂的事情交给Actions
  mutations: {
    couter(state, payload) {
      payload.count++;
    },
    addToCar(state, payload) {
      payload.isChecked = true;
      state.CarInfoList.push(payload)
    }

  },
  actions: {
    // 传值
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        // 判断不能添加重复商品(细品)
        let Info = context.state.CarInfoList.find(item => payload.id == item.id);
        if (Info) {
          // Info.count += 1;
          context.commit('couter', Info)
          resolve('当前商品数量加一')
        } else {
          context.commit('addToCar', payload)
          // state.CarInfoList.push(payload);
          payload.count = 1;
          resolve('当前商品数量增加')
        }
        // console.log(context.state.CarInfoList);
      })
    }
  },
  modules: {
  },
  getters: {
    CarListLength(state) {
      return state.CarInfoList.length;
    },
    CartList(state) {
      return state.CarInfoList;
    }
  }
})
