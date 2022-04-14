import Vue from 'vue';
import Vuetify from 'vuetify';

import {createLocalVue, mount} from "@vue/test-utils";
import CourseMaterial from "../../src/resources/app/pages/course/CourseMaterial";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("CourseMaterial", () => {
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
    describe("and description is NOT given", () => {
      it("should renders", () => {
        const wrapper = mount(CourseMaterial, {
          localVue,
          vuetify,
          store,
        });

        expect(wrapper.find("#description").exists()).toBe(false);
      })
    })
  })
})
