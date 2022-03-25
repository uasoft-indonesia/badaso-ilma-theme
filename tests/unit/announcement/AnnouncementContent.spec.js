import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";
import AnnouncementContent from "../../../src/resources/app/components/AnnouncementContent";

const localVue = createLocalVue();

describe("AnnouncementContent", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  describe("when loaded", () => {
    describe('and when no comment exist', () => {
      it("should renders",  () => {
        const wrapper = mount(AnnouncementContent, {
          localVue,
          vuetify,
        });

        const findAuthor = wrapper.find("#author");
        expect(findAuthor.exists()).toBe(true);

        const findDate = wrapper.find("#date")
        expect(findDate.exists()).toBe(true);
      });
    });
  });
});
