import store from "./store/store";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import { createInertiaApp } from "@inertiajs/inertia-vue";

Vue.use(Vuetify);
const vuetify = new Vuetify({});

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
