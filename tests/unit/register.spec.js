import { mount } from "@vue/test-utils";
import Register from "../../src/resources/app/pages/register.vue";

jest.mock("../../src/resources/api/auth");

describe("Register", () => {
  describe("when loaded", () => {
    const wrapper = mount(Register, {
      data() {
        return {
          loading: false,
          valid: true,
          fullname: "test",
          fullNameRules: [(v) => !!v || "Name is required"],
          email: "test@gmail.com",
          emailRules: [
            (v) => !!v || "Email is required",
            (v) => /.+@.+\..+/.test(v) || "Email must be valid",
          ],
          username: "test",
          usernameRules: [
            (v) => !!v || "Username is required",
            (v) =>
              (v && v.length >= 4) ||
              "Username must be at least 4 characters long",
          ],
          password: "test",
          passwordRules: [(v) => !!v || "Password is required"],
          passwordConfirmation: "test",
          passwordConfirmationRules: [
            (v) => !!v || "Password is required",
            (v) => {
              if (this.password === v) {
                return true;
              } else {
                return "Passwords does not match.";
              }
            },
          ],
        };
      },
    });
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

  describe("when sending request", () => {
    const wrapper = mount(Register, {
      data() {
        return {
          loading: false,
          valid: true,
          fullname: "test",
          fullNameRules: [(v) => !!v || "Name is required"],
          email: "test@gmail.com",
          emailRules: [
            (v) => !!v || "Email is required",
            (v) => /.+@.+\..+/.test(v) || "Email must be valid",
          ],
          username: "test",
          usernameRules: [
            (v) => !!v || "Username is required",
            (v) =>
              (v && v.length >= 4) ||
              "Username must be at least 4 characters long",
          ],
          password: "test",
          passwordRules: [(v) => !!v || "Password is required"],
          passwordConfirmation: "test",
          passwordConfirmationRules: [
            (v) => !!v || "Password is required",
            (v) => {
              if (this.password === v) {
                return true;
              } else {
                return "Passwords does not match.";
              }
            },
          ],
        };
      },
    });

    it("should show loading on button", async () => {
      await wrapper.setData({ loading: true });
      expect(wrapper.find("#loading-icon").exists()).toBe(true);
    });
  });
});
