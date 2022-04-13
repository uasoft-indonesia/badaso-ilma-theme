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

      const dropDown = () => wrapper.find("#drop-down");
      expect(dropDown().exists()).toBe(true);

      expect(wrapper.find("#title-form").exists()).toBe(true);
    })
  })
})
