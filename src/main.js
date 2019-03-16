import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    let delay = 0;
    if (binding.modifiers.delayed) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});
Vue.filter('to-lowercase', value => value.toLowerCase());

Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook');
  },
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
