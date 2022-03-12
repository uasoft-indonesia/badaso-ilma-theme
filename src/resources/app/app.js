import store from "./store/store";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import vuetify from "../../plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import {
  createInertiaApp,
  plugin as InertiaPlugin,
} from "@inertiajs/inertia-vue";
import VueToastify from "vue-toastify";

Vue.use(VueToastify);
Vue.use(Vuetify);
Vue.use(InertiaPlugin);

createInertiaApp({
  resolve: (name) => require(`./pages/${name}`),
  setup({ el, App, props, plugin }) {
    Vue.use(plugin);

    new Vue({
      store,
      vuetify,
      render: (h) => h(App, props),
    }).$mount(el);
  },
});
