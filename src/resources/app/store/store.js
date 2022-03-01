import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {
    getGlobalState: (state) => {
      return state;
    },
  },
  plugins: [createPersistedState()],
});
