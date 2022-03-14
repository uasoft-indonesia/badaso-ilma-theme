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

      const mockInertiaVisit = jest.fn();
      const wrapper = shallowMount(AddCourseCard, {
        localVue,
        vuetify,
        mocks: {
          $inertia: {
            visit: mockInertiaVisit,
          },
          $store: {},
        },
      });

      await wrapper.find("#create-btn").trigger("click");
      await wrapper.vm.$nextTick();
      expect(mockInertiaVisit).toHaveBeenCalled("/course/create");
    });
  });
});
