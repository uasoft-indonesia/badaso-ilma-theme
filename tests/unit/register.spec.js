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
      fullnameInput.setValue("test");
      expect(wrapper.find("#input-fullname").element.value).toBe("test");

      const emailInput = wrapper.find("#input-email");
      emailInput.setValue("test@gmail.com");
      expect(wrapper.find("#input-email").element.value).toBe("test@gmail.com");

      const usernameInput = wrapper.find("#input-username");
      usernameInput.setValue("test");
      expect(wrapper.find("#input-username").element.value).toBe("test");

      const passwordInput = wrapper.find("#input-fullname");
      passwordInput.setValue("test");
      expect(wrapper.find("#input-fullname").element.value).toBe("test");

      const passwordConfirmInput = wrapper.find("#input-fullname");
      passwordConfirmInput.setValue("test");
      expect(wrapper.find("#input-fullname").element.value).toBe("test");
    });
  });

  describe("when filling the forms", () => {
    let api 

    it("should show values on inputs", async () => {
      
    });
  });
});
