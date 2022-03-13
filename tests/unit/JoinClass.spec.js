import Vue from 'vue';
import Vuetify from 'vuetify';

import {createLocalVue, mount} from "@vue/test-utils";
import JoinCourse from "../../src/resources/app/pages/JoinCourse";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("JoinCoursePage", () => {
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
      const wrapper = mount(JoinCourse, {});
      const findTitle = () => wrapper.find('#title');
      const findSubTitle = () => wrapper.find('#sub-title');
      const findForm = () => wrapper.find('#code-form');
      const findButton = () => wrapper.find('#join-btn');

      expect(wrapper.find('#join-card').exists()).toBe(true);
      expect(findTitle().exists()).toBe(true);
      expect(findTitle().text()).toBe('Enter Code');
      expect(findSubTitle().exists()).toBe(true);
      expect(findSubTitle().text()).toBe('Class code provided by your teacher');
      expect(findForm().exists()).toBe(true);
      expect(findForm().attributes().label).toBe('Class Code');
      expect(findButton().exists()).toBe(true);
      expect(findButton().text()).toBe('Join');
      expect(findButton().attributes().disabled).toBe("true");
    });
  });

  describe("when form is not empty", () => {
    it("should enable join button" , async () => {
      const wrapper = mount(JoinCourse, {
        localVue,
        vuetify,
      });

      wrapper.setData({code: '992044'});
      expect(wrapper.vm.code).toBe('992044');
      expect(wrapper.vm.isFormValid).toBe(false);
    })
  })
});
