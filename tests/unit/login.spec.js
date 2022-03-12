import { mount } from "@vue/test-utils";
import { validate } from "uuid";
import Login from "../../src/resources/app/pages/login.vue";

describe("Login", () => {
  describe("when loaded", () => {
    const wrapper = mount(Login, {
      data() {
        return {
          valid: true,
          email: "",
          emailRules: [
            (v) => !!v || "Email is required",
            (v) => /.+@.+\..+/.test(v) || "Email must be valid",
          ],
          password: "",
          passwordRules: [(v) => !!v || "Password is required"],
          remember: false,
          backgroundImage: "../../assets/undraw_on_the_office_re_cxds.svg",
        };
      },
      methods() {
        validate(), login();
      },
    });

    it("has all of the required elements", () => {
      expect(wrapper.find("#input-email").exists()).toBe(true);
      expect(wrapper.find("#input-password").exists()).toBe(true);
      expect(wrapper.find("#btn-register").exists()).toBe(true);
      expect(wrapper.find("#login-checkbox").exists()).toBe(true);
      expect(wrapper.find("#btn-register").text()).toContain("Register");
      expect(wrapper.find("#btn-login").exists()).toBe(true);
      expect(wrapper.find("#btn-login").text()).toContain("Login");
    });

    it("test data input for login component", () => {
      wrapper.setData({ email: "wrong email" });
      expect(wrapper.find(".error").exists()).toBeFalsy();

      wrapper.setData({ password: "wrong" });
      expect(wrapper.find(".error").exists()).toBeFalsy();
    });
  });
});
