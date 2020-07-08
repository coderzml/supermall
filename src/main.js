import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LazyLoad from 'vue-lazyload'
// 自己封装的Toast插件
import Toast from './components/common/toast/index'
// 解决移动端300ms的延迟
import FastClick from 'fastclick'
Vue.config.productionTip = false;
// 后面的事件总线 用Vue的原型使那个地方都能用
Vue.prototype.$bus = new Vue();
Vue.use(Toast)
Vue.use(LazyLoad, {
  loading: './assets/img/common/placeholder.png'
})
// 调用事件  attach:附加
FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

