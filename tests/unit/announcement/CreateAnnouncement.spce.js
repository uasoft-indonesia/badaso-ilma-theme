import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";
import CreateAnnouncement from "../../../src/resources/app/components/CreateAnnouncement";

const localVue = createLocalVue();

describe("CreateAnnouncement", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  describe("when loaded", () => {
    it("should renders", () => {
      const wrapper = mount(CreateAnnouncement, {
        localVue,
        vuetify,
      });

      const findInitialForm = wrapper.find("#initial-form");
      expect(findInitialForm.exists()).toBe(true);

      const initialText = wrapper.find("#initial-text");
      expect(initialText.exists()).toBe(true);
    });
  });
});
