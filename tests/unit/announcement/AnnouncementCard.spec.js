import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";
import AnnouncementCard from "../../../src/resources/app/components/AnnouncementCard";

const localVue = createLocalVue();

describe("AnnouncementCard", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  describe("when loaded", () => {
    describe('and when no comment exist', () => {
      it("should renders",  () => {
        const wrapper = mount(AnnouncementCard, {
          localVue,
          vuetify,
        });

        const findAnnouncement = wrapper.find("#announcemet");
        expect(findAnnouncement.exists()).toBe(true);
      });
    });
  });
});
