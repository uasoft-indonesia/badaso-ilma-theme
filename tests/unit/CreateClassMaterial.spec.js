import Vue from 'vue';
import Vuetify from 'vuetify';

import {createLocalVue, mount} from "@vue/test-utils";
import CreateCourseMaterial from "../../src/resources/app/pages/course/CreateCourseMaterial";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("CreateCourseMaterial", () => {
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

  describe("when loaded", () => {
    it("should renders", () => {
      const wrapper = mount(CreateCourseMaterial, {
        localVue,
        vuetify,
        store,
      });

      const findTitle = () => wrapper.find("#title");
      expect(findTitle().exists()).toBe(true);
      expect(findTitle().text()).toBe("Create Material")
    })
  })
})
