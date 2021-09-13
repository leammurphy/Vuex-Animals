import Vue from "vue";
import BootstapVue from "bootstrap-vue";

import 'bootstap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(BootstapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
