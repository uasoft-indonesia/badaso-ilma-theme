import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";

import CourseCard from "../../src/resources/app/components/CourseCard";

Object.defineProperty(window, "location", {
  writable: true,
  value: { assign: jest.fn() },
});

const localVue = createLocalVue();

describe("CourseCard Component", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  describe("when loaded", () => {
    it("should renders", () => {
      const wrapper = mount(CourseCard, {
        localVue,
        vuetify,
      });

      const findRoom = () => wrapper.find("#room-tag");
      expect(findRoom().exists()).toBe(true);
      expect(findRoom().text()).toBe("Room");

      const findClassroom = () => wrapper.find("#classroom");
      expect(findClassroom().exists()).toBe(true);

      const findTeacher = () => wrapper.find("#teacher-name");
      expect(findTeacher().exists()).toBe(true);

      const findCourseName = () => wrapper.find("#course-name");
      expect(findCourseName().exists()).toBe(true);
    });
  });

  describe("when course card clicked", () => {
    it("should redirect to course page", async () => {
      Object.defineProperty(window, "location", {
        writable: true,
        value: { assign: jest.fn() },
      });

      const wrapper = mount(CourseCard, {
        localVue,
        vuetify,
        propsData: {
          courseId: 1,
        },
        mocks: {
          window,
        },
      });

      wrapper.find('[data-testid="course-card"]').trigger("click");
      await wrapper.vm.$nextTick();

      expect(window.location.assign).toHaveBeenCalledWith("/course/1");
    });
  });
});
