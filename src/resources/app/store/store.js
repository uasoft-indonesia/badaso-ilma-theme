import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    isAuthenticated: false,
    user: {},
    token: {},
  },
  mutations: {
    SET_IS_AUTHENTICATED(state, payload) {
      state.isAuthenticated = payload;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    SET_IS_AUTHENTICATED({ commit }, payload) {
      commit("SET_IS_AUTHENTICATED", payload);
    },
    SET_USER({ commit }, payload) {
      commit("SET_USER", payload);
    },
  },
  getters: {
    getGlobalState: (state) => {
      return state;
    },
  },
  plugins: [createPersistedState()],
});
