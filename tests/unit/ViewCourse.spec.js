import { mount } from "@vue/test-utils";
import ViewCourse from "../../src/resources/app/pages/ViewCourse";

describe("CourseCard Component", () => {
  describe("when loaded", () => {
    it("should renders", () => {
      const wrapper = mount(ViewCourse, {});

      const findCard1 = () => wrapper.find('#course-card');
      expect(findCard1().exists()).toBe(true);

      const findCard2 = () => wrapper.find('#add-course-card');
      expect(findCard2().exists()).toBe(true);
    });
  })
});
