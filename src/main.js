import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/animate.css';
import './assets/css/foundation.min.css';
import './assets/css/app.css';
import { store } from './store/store';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.http.options.root = 'https://quotes-2931f.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method === 'POST') {
    request.method = 'PUT';
  }
  next((response) => {
    response.json = () => ({ messages: response.body });
  });
});

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
