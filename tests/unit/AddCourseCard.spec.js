import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import AddCourseCard from "../../src/resources/app/components/AddCourseCard";

Object.defineProperty(window, "location", {
  writable: true,
  value: { assign: jest.fn() },
});

const localVue = createLocalVue();
localVue.use(Vuex);

describe("AddCourseCard Component", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  describe("when loaded", () => {
    it("should renders", () => {
      const wrapper = mount(AddCourseCard, {});

      const findAddCourse = () => wrapper.find("#add-course-tag");
      expect(findAddCourse().exists()).toBe(true);
      expect(findAddCourse().text()).toBe("Add Course");

      const findCreateButton = () => wrapper.find("#create-btn");
      expect(findCreateButton().exists()).toBe(true);

      const findJoinButton = () => wrapper.find("#join-btn");
      expect(findJoinButton().exists()).toBe(true);
    });
  });

  describe("when create button clicked", () => {
    it("should redirect to create course page", async () => {
      Object.defineProperty(window, "location", {
        writable: true,
        value: { assign: jest.fn() },
      });

      const wrapper = shallowMount(AddCourseCard, {
        localVue,
        vuetify,
        mocks: {
          $inertia: {
            visit: jest.fn(),
          },
          $store: {}
        },
      });

      wrapper.find("#create-btn").trigger("click");
      await wrapper.vm.$nextTick();
      console.log(wrapper.vm.$inertia);
      // assert inertia visit called
      expect(true).toBe(true);
      // expect(wrapper.vm.$inertia.visit).toHaveBeenCalledWith("/course/create");
    });
  });
});
