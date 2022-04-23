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
      it("should renders", async () => {
        const wrapper = await mount(CourseMaterial, {
          localVue,
          vuetify,
          store,
          data() {
            return {
              material: {
                title: "Test",
                description: null,
                topic: {
                  title: "Topic"
                }
              }
            }
          }
        });

        await expect(wrapper.find("#description").exists()).toBe(false);
      });
    });

    describe("and description is given", () => {
      it("should renders", async () => {
        const wrapper = await mount(CourseMaterial, {
          localVue,
          vuetify,
          store,
          data() {
            return {
              material: {
                title: "Test",
                content: "test description",
                topic: {
                  title: "Topic"
                }
              }
            }
          }
        });

        const description = await wrapper.find("#description");
        await expect(description.exists()).toBe(true);
        await expect(description.text()).toBe("test description");
      });
    });
  })
})
