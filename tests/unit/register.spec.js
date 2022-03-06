import { mount } from "@vue/test-utils";
import Register from "../../src/resources/app/pages/register";

describe("Register", () => {
  const wrapper = mount(Register, {});

  describe("when loaded", () => {
    it("has all of the required elements", () => {
      expect(wrapper.find("#title").exists()).toBe(true);
      expect(wrapper.find("#title").text()).toContain("Register");
      expect(wrapper.find("#input-fullname").exists()).toBe(true);
      expect(wrapper.find("#input-username").exists()).toBe(true);
      expect(wrapper.find("#input-email").exists()).toBe(true);
      expect(wrapper.find("#input-password").exists()).toBe(true);
      expect(wrapper.find("#input-password-comfirmation").exists()).toBe(true);
      expect(wrapper.find("#btn-register").exists()).toBe(true);
      expect(wrapper.find("#btn-register").text()).toContain("Register");
      expect(wrapper.find("#btn-login").exists()).toBe(true);
      expect(wrapper.find("#btn-login").text()).toContain("Login");
    });
  });

  describe("when filling the forms", () => {
    it("should show values on inputs", async () => {
      const fullnameInput = wrapper.find("#input-fullname");
      await fullnameInput.setValue("test name");
      expect(wrapper.find("#input-fullname").element.value).toBe("testname");

      const emailInput = wrapper.find("#input-email");
      await emailInput.setValue("test name");
      expect(wrapper.find("#input-email").element.value).toBe("testname");

      const usernameInput = wrapper.find("#input-username");
      await usernameInput.setValue("test name");
      expect(wrapper.find("#input-username").element.value).toBe("testname");

      const passwordInput = wrapper.find("#input-fullname");
      await passwordInput.setValue("test name");
      expect(wrapper.find("#input-fullname").element.value).toBe("testname");

      const passwordConfirmInput = wrapper.find("#input-fullname");
      await passwordConfirmInput.setValue("test name");
      expect(wrapper.find("#input-fullname").element.value).toBe("testname");
    });
  });
});
