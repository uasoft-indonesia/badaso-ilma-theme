import Vue from 'vue';
import Vuetify from 'vuetify';

import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import CreateQuiz from "../../src/resources/app/pages/course/CreateQuiz";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("CreateQuiz", () => {
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
    it("should renders all form inputs", () => {
      const wrapper = mount(CreateQuiz, {
        localVue,
        vuetify,
        store,
        props: {
            id: 1
        }
      });

      const dropDown = () => wrapper.find("#drop-down");
      expect(dropDown().exists()).toBe(true);

      expect(wrapper.find("#title-form").exists()).toBe(true);
      expect(wrapper.find("#description").exists()).toBe(true);
      expect(wrapper.find("#start-time-form").exists()).toBe(true);
      expect(wrapper.find("#end-time-form").exists()).toBe(true);
      expect(wrapper.find("#duration-form").exists()).toBe(true);
      expect(wrapper.find("#max-point-form").exists()).toBe(true);
      expect(wrapper.find("#link-form").exists()).toBe(true);

      const cancelButton = () => wrapper.find("#cancel-button");
      expect(cancelButton().exists()).toBe(true);
      expect(cancelButton().text()).toBe("Cancel");

      const createButton = () => wrapper.find("#create-button");
      expect(createButton().exists()).toBe(true);
      expect(createButton().text()).toBe("Create");
    })
  })
})
