import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";

import CreateCourse from "  ../../../src/resources/app/pages/course/CreateCourse";

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
});
