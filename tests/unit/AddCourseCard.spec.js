import { mount } from "@vue/test-utils";
import AddCourseCard from "../../src/resources/app/components/AddCourseCard";

// Object.defineProperty(window, "location", {
//   writable: true,
//   value: { assign: jest.fn() },
// });

describe("AddCourseCard Component", () => {
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
    it("should redirect to create course page", () => {
      Object.defineProperty(window, "location", {
        writable: true,
        value: { assign: jest.fn() },
      });

      const wrapper = mount(AddCourseCard, {});

      wrapper.find("#create-btn").trigger("click");
      expect(window.location.assign).toHaveBeenCalledWith("/course/create");
    });
  });
});
