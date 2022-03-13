import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";

import { createCourse } from "../../../src/resources/api/course/create";
import CreateCourse from "  ../../../src/resources/app/pages/course/CreateCourse";

jest.mock("../../../src/resources/api/course/create", () => ({
  createCourse: jest.fn()
}));

describe("CreateCourse.vue", () => {
  let vuetify;
  const localVue = createLocalVue();

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should render correct forms", () => {
    const wrapper = mount(CreateCourse, {
      localVue,
      vuetify,
    });

    expect(wrapper.find("#title").text()).toBeTruthy();
    expect(wrapper.find("#name-form").exists()).toBe(true);
    expect(wrapper.find("#subject-form").exists()).toBe(true);
    expect(wrapper.find("#room-form").exists()).toBe(true);
    expect(wrapper.find("#cancel-btn").exists()).toBe(true);
    expect(wrapper.find("#create-btn").exists()).toBe(true);
  });

  describe("when all fields are filled", () => {
    it("form should be valid", async () => {
      const wrapper = mount(CreateCourse, {
        vuetify,
        localVue,
      });

      wrapper.setData({
        form: {
          values: {
            name: "Test Course",
            subject: "Test Subject",
            room: "Test Room",
          },
        }
      });

      expect(wrapper.vm.form.isValid).toBe(true);
    });
  });

  describe("when submitted successfully", () => {
    it("should redirect to course page", async () => {
      delete window.location;
      const location = new URL("http://localhost/");
      location.assign = jest.fn();
      window.location = location;
      const wrapper = mount(CreateCourse, {
        localVue,
        vuetify,
        mocks: {
          window
        }
      });

      createCourse.mockReturnValueOnce({
        data: {
          id: 1,
        },
        error: null,
        errorMessage: null,
      });

      wrapper.setData({
        form: {
          values: {
            name: "Test Course",
            subject: "Test Subject",
            room: "Test Room",
          },
        },
      });

      wrapper.find("#create-btn").vm.$emit("click");
      await wrapper.vm.$nextTick();

      expect(window.location.assign).toHaveBeenCalledWith("/course/1");
    });
  });

  describe("when submission is failed", () => {
    it("should display snackbar with error message", async () => {
      const wrapper = mount(CreateCourse, {
        localVue,
        vuetify,
      });

      createCourse.mockReturnValueOnce({
        data: null,
        error: true,
        errorMessage: "Test Error",
      });

      wrapper.setData({
        form: {
          values: {
            name: "Test Course",
            subject: "Test Subject",
            room: "Test Room",
          },
        },
      });

      expect(wrapper.vm.snackbar.isVisible).toBe(false);
      wrapper.find("#create-btn").vm.$emit("click");
      await wrapper.vm.$nextTick();

      expect(wrapper.vm.snackbar.isVisible).toBe(true);
      expect(wrapper.vm.snackbar.text).toBe("Test Error");
    });
  })
});
