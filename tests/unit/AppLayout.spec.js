import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import AppLayout from "../../src/resources/app/components/Layout/AppLayout.vue";
import Sidebar from "../../src/resources/app/components/Sidebar.vue";
import Snackbar from "../../src/resources/app/components/Snackbar.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("AppLayout.vue", () => {
  let vuetify;
  let store;

  beforeEach(() => {
    vuetify = new Vuetify();
    store = new Vuex.Store({
      state: {
        isAuthenticated: true,
      },
    });
  });

  it("should contains sidebar", () => {
    const wrapper = shallowMount(AppLayout, {
      localVue,
      vuetify,
      store,
    });

    expect(wrapper.findComponent(Sidebar).exists()).toBe(true);
  });

  it("should contains snackbar", () => {
    const wrapper = shallowMount(AppLayout, {
      localVue,
      vuetify,
      store,
    });

    expect(wrapper.findComponent(Snackbar).exists()).toBe(true);
  });
});
