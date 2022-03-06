import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD
// import api from "./../api";
=======
>>>>>>> a39cf5b97ef6c0aa96ad0ffb6835b2357d91bbde
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
<<<<<<< HEAD
  state: {
    layout: "default",
  },
=======
  state: {},
>>>>>>> a39cf5b97ef6c0aa96ad0ffb6835b2357d91bbde
  mutations: {},
  actions: {},
  getters: {
    getGlobalState: (state) => {
      return state;
    },
  },
  plugins: [createPersistedState()],
});
