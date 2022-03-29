import Vuetify from "vuetify";
import { mount , createLocalVue} from "@vue/test-utils";
import Announcement from "../../../src/resources/app/pages/course/Announcement";

const localVue = createLocalVue();

describe("Announcement", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  describe("when loaded", () => {
    it("should renders", () => {
      const wrapper = mount(Announcement, {
        localVue,
        vuetify,
      });

      const findContainer = wrapper.find("#announcement-container");
      expect(findContainer.exists()).toBe(true);
    })
  });
})
