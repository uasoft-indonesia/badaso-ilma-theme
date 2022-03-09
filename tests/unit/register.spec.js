import { mount } from "@vue/test-utils";
import Register from "../../src/resources/app/pages/register.vue";

jest.mock('../../src/resources/api/auth');

describe("Register", () => {

  describe("when loaded", () => {
    const wrapper = mount(Register, {});
    it("has all of the required elements", () => {
      expect(wrapper.find("#input-fullname").exists()).toBe(true);
      expect(wrapper.find("#input-username").exists()).toBe(true);
      expect(wrapper.find("#input-email").exists()).toBe(true);
      expect(wrapper.find("#input-password").exists()).toBe(true);
      expect(wrapper.find("#input-password-confirmation").exists()).toBe(true);
      expect(wrapper.find("#btn-register").exists()).toBe(true);
      expect(wrapper.find("#btn-register").text()).toContain("Register");
      expect(wrapper.find("#btn-login").exists()).toBe(true);
      expect(wrapper.find("#btn-login").text()).toContain("Login");
    });
  });
});
